import {FastifyInstance} from "fastify/types/instance";
import {CategoryInteractor} from "../interactor/categoryInteractor";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {General_Errors} from "../../utils/utils";

export async function getAllCategories(rep: FastifyInstance) {
    rep.get('/list', (req: FastifyRequest, rep: FastifyReply) => {
        try {
            const categoryInteractor = new CategoryInteractor(rep);
            categoryInteractor.getAllCategories();
        } catch (e) {
            throw {msg: General_Errors.UNKNOWN}
        }
    })
}