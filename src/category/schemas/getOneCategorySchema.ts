export const getOneCategorySchema = {
    description: 'get one category by id.',
    tags: ['category'],
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                description: 'category id'
            }
        }
    },
    security: [
        {
            "UserAuthorization": []
        }
    ]
}