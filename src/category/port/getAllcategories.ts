import {FastifyInstance} from "fastify/types/instance";
import {CategoryInteractor} from "../interactor/categoryInteractor";
import {FastifyReply} from "fastify/types/reply";
import {FastifyRequest} from "fastify/types/request";
import {getUserWithToken} from "../../authentication/authenticationWithJwt";
import {getAllCategorySchema} from "../schemas/getAllCategorySchema";

export async function getAllCategories(app: FastifyInstance) {
    app.get('/list', {
        preHandler: getUserWithToken, schema: getAllCategorySchema}, (req: FastifyRequest, rep: FastifyReply) => {
        try {
            const categoryInteractor = new CategoryInteractor(rep);
            categoryInteractor.getAllCategories();
        } catch (e) {
            throw {msg: e}
        }
    })
}