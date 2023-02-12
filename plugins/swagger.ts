import {FastifyInstance} from "fastify/types/instance";
const fp = require('fastify-plugin');
const port = process.env["PORT"];

exports.options = fp(async function(app: FastifyInstance) {
    app.register(require('fastify-swagger'), {
        routePrefix: "/doc",
        swagger: {
            info: {
                title: "UniPlato Interview",
                description: "Some Documentation",
                version: "0.1.0"
            },
            host: `localhost:${port}`,
            schemes: ["http"],
            consumes: ["application/json"],
            produces: ["application/json"],
            tags: [
                { name: "user", description: "User related end-points" },
                { name: "category", description: "Category related end-points" }
            ],
            definitions: {
                User: {
                    type: 'object',
                    required: ['email', 'name', 'password'],
                    properties: {
                        id: { type: 'string', format: 'uuid' },
                        name: { type: 'string'},
                        email: { type: 'string', format: 'email' },
                        password: { type: 'string' },
                    },
                },
                Category: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', format: 'uuid' },
                        category: { type: 'string'},
                        counter: { type: 'Integer' },
                    },
                },
            },
            securityDefinitions: {
                UserAuthorization: {
                    type: "apiKey",
                    name: "authorization",
                    in: "header"
                }
            }
        },
        exposeRoute: true
    })
})
