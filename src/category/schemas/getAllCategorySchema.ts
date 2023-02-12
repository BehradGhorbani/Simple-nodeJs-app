export const getAllCategorySchema = {
    description: 'get all categories.',
    tags: ['category'],
    params: {},
    security: [
        {
            "UserAuthorization": []
        }
    ]
}