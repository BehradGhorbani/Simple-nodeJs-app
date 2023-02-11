import {FastifyInstance} from "fastify/types/instance";
import {CategoryInteractor} from "../interactor/categoryInteractor";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {General_Errors} from "../../utils/utils";
import {UpdateCategoryCountParams} from "../constant/categoryConstant";

export async function updateCategoryCount(rep: FastifyInstance) {
    rep.put('/', (req: FastifyRequest<{ Body: UpdateCategoryCountParams }>, rep: FastifyReply) => {
        const categoryInteractor = new CategoryInteractor(rep);
        categoryInteractor.updateCategoryCount(req.body)
    })
}