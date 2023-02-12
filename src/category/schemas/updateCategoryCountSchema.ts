export const updateCategoryCountSchema = {
    description: 'update category object',
    tags: ['category'],
    body: {
        type: 'object',
        properties: {
            categoryId: {type: 'integer'},
            counter: {type: 'integer'},
        },
    },
    security: [
        {
            "UserAuthorization": []
        }
    ]
}