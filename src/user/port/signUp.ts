import {FastifyInstance} from "fastify/types/instance";
import {UserInteractor} from "../interactor/userInteractor";
import {SignUpUserParams} from "../constant/userConstant";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {General_Errors} from "../../utils/utils";
import {signUpUserSchema} from "../schemas/signUpUserSchema";

export async function signUp (app: FastifyInstance) {
    app.post('/signup', {schema: signUpUserSchema}, (req: FastifyRequest<{ Body:  SignUpUserParams}>, rep: FastifyReply) => {
        try {
            const userInteractor = new UserInteractor(rep);
            userInteractor.signUpUser(req.body)
        } catch (e) {
            throw {msg: General_Errors.UNKNOWN}
        }
    })
}