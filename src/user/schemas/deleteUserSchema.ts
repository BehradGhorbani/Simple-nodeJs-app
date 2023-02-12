export const deleteUserSchema = {
    description: 'Delete User',
    tags: ['God Mode'],
    body: {
        type: 'object',
        properties: {
            email: {type: 'string', format: 'email'},
        },
    },
}