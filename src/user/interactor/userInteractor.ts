import {SignUpUserParams, UserLoginParams, UserAuthOutputType} from "../constant/userConstant";
import {validateUserLoginInput, validateUserSignUpInput} from "../validator/userValidator";
import {General_Errors, md5Hasher, Output} from "../../utils/utils";
import { PrismaClient } from '@prisma/client'
import {FastifyReply} from "fastify/types/reply";
import {createJwtToken} from "../../authentication/authenticationWithJwt";
const prisma = new PrismaClient()

export class UserInteractor {
    readonly output;

    constructor(rep: FastifyReply) {
        this.output = new Output(rep);
    }

    async signUpUser(signUpUserParams: SignUpUserParams): Promise<void> {
        try {
            validateUserSignUpInput(signUpUserParams);
            let {name, email, password} = signUpUserParams;

            const existsUser = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            if (existsUser) {
                return await this.output.error(General_Errors.USER_EXISTS, 403);
            }

            password = md5Hasher(password);
            const newUser = await prisma.user.create({
                data: {
                    name, password, email
                }
            });

            const signUpOutPut: UserAuthOutputType = {
                user: newUser,
                accessToken: await createJwtToken(newUser)
            }

            return await this.output.result(signUpOutPut, 200);
        } catch (e) {
            await this.output.error(e, 403)
        }
    }

    async userLogin(userLoginParams: UserLoginParams): Promise<void> {
        try {
            validateUserLoginInput(userLoginParams);
            let {email, password} = userLoginParams;
            password = md5Hasher(password);

            const user = await prisma.user.findFirst({where: {email, password}});

            if (!user) {
                return await this.output.error(General_Errors.INCORRECT_CREDENTIALS, 404)
            }

            const loginOutPut: UserAuthOutputType = {
                user,
                accessToken: await createJwtToken(user)
            }

            return await this.output.result(loginOutPut, 200)
        } catch (e) {
            await this.output.error(e, 403)
        }
    }

    async deleteUser(email: string): Promise<void> {
        try {
            if(!email){
                return await this.output.error(General_Errors.REQUEST_PARAM_IS_NOT_VALID, 403);
            }

            await prisma.user.delete({where: {email}});
            return await this.output.result(true, 200)
        } catch (e) {
            await this.output.error(e, 403)
        }
    }
}