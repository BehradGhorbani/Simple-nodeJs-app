import { PrismaClient } from '@prisma/client'
import {FastifyReply} from "fastify/types/reply";
import {General_Errors, Output} from "../../utils/utils";
import {UpdateCategoryCountParams} from "../constant/categoryConstant";
import {Category} from "../entity/category";
import {validateUpdateCategoryCountInput} from "../validator/categoryValidator";
const prisma = new PrismaClient()

export class CategoryInteractor {
    readonly output;

    constructor(rep: FastifyReply) {
        this.output = new Output(rep);
    }

    async getAllCategories(): Promise<void> {
        const categories: Category[] = await prisma.category.findMany();
        return await this.output.result(categories, 200)
    }

    async getOneCategory(categoryId: number): Promise<void> {
        if (!categoryId){
            return await this.output.error(General_Errors.REQUEST_PARAM_IS_NOT_VALID, 403)
        }

        const category: Category | null = await prisma.category.findFirst({where: {id: categoryId}});

        if(!category) {
            return await this.output.error(General_Errors.OBJECT_NOT_FOUND, 404)
        }
        return await this.output.result({category}, 200)
    }

    async updateCategoryCount(updateCategoryCountParams: UpdateCategoryCountParams): Promise<void> {
        try {
            validateUpdateCategoryCountInput(updateCategoryCountParams)
            const {categoryId, counter} = updateCategoryCountParams;

            let category: Category | null = await prisma.category.findFirst({where: {id: categoryId}});

            if (!category) {
                return await this.output.error(General_Errors.OBJECT_NOT_FOUND, 404)
            }

            category = await prisma.category.update({where: {id: categoryId}, data: {counter}});
            return await this.output.result({category}, 200);
        } catch (e) {
            return await this.output.error(e, 403)
        }
    }
}