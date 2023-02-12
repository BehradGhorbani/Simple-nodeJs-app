export const signUpUserSchema = {
    description: 'User SignUp',
    tags: ['user'],
    body: {
        type: 'object',
        properties: {
            name: {type: 'string'},
            email: {type: 'string', format: 'email'},
            password: {type: 'string'},
        },
    }
}