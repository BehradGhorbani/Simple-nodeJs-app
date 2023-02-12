import {FastifyInstance} from "fastify/types/instance";
import {UserInteractor} from "../interactor/userInteractor";
import {SignUpUserParams} from "../constant/userConstant";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {General_Errors} from "../../utils/utils";
import {loginUserSchema} from "../schemas/loginUserSchema";

const querySchema = {
    type: 'object',
    properties: {
        deleted: { type: 'boolean' }
    }
}

export async function login(app: FastifyInstance) {
    app.post('/login', {schema: loginUserSchema},(req: FastifyRequest<{ Body:  SignUpUserParams}>, rep: FastifyReply) => {
        try {
            const userInteractor = new UserInteractor(rep);
            userInteractor.userLogin(req.body)
        } catch (e) {
            throw {msg: General_Errors.UNKNOWN}
        }
    })
}