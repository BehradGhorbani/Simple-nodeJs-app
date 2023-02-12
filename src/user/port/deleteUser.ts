import {FastifyInstance} from "fastify/types/instance";
import {UserInteractor} from "../interactor/userInteractor";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {General_Errors} from "../../utils/utils";
import {deleteUserSchema} from "../schemas/deleteUserSchema";
import {getUserWithToken} from "../../authentication/authenticationWithJwt";

export async function deleteUser (app: FastifyInstance) {
    // @ts-ignore
    app.delete('/delete', { schema: deleteUserSchema}, (req: FastifyRequest<{ Body: {email: string}}>, rep: FastifyReply) => {
        try {
            const userInteractor = new UserInteractor(rep);
            userInteractor.deleteUser(req.body.email)
        } catch (e) {
            throw {msg: General_Errors.UNKNOWN}
        }
    })
}