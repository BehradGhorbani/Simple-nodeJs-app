import {FastifyInstance} from "fastify/types/instance";
import {CategoryInteractor} from "../interactor/categoryInteractor";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {UpdateCategoryCountParams} from "../constant/categoryConstant";
import {getUserWithToken} from "../../authentication/authenticationWithJwt";
import {updateCategoryCountSchema} from "../schemas/updateCategoryCountSchema";

export async function updateCategoryCount(app: FastifyInstance) {
    // @ts-ignore
    app.put('/', {schema: updateCategoryCountSchema}, (req: FastifyRequest<{ Body: UpdateCategoryCountParams }>, rep: FastifyReply) => {
        const categoryInteractor = new CategoryInteractor(rep);
        categoryInteractor.updateCategoryCount(req.body)
    })
}