import {FastifyInstance} from "fastify/types/instance";
import {CategoryInteractor} from "../interactor/categoryInteractor";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {General_Errors} from "../../utils/utils";
import {getUserWithToken} from "../../authentication/authenticationWithJwt";
import {getOneCategorySchema} from "../schemas/getOneCategorySchema";

export async function getOneCategory(app: FastifyInstance) {
    // @ts-ignore
    app.get('/:id',{preHandler: getUserWithToken, schema: getOneCategorySchema} ,(req: FastifyRequest<{ Params:  {id: string}}>, rep: FastifyReply) => {
        try {
            const categoryInteractor = new CategoryInteractor(rep);
            categoryInteractor.getOneCategory(parseInt(req.params.id));
        } catch (e) {
            throw {msg: General_Errors.UNKNOWN}
        }
    })
}