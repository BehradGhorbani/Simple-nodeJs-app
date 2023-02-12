export const loginUserSchema = {
    description: 'User login',
    tags: ['user'],
    body: {
        type: 'object',
        properties: {
            email: {type: 'string', format: 'email'},
            password: {type: 'string'},
        },
    }
}