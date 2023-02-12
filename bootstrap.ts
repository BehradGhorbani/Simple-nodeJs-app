import {Migration} from "./src/dbMigration/dbMigration";
const dotenv = require("dotenv");
dotenv.config();
const fastify = require('fastify');
const app = fastify();

const port = process.env['PORT'];
const signUpRoute = require('./src/user/port/signUp').signUp;
const loginRoute = require('./src/user/port/login').login;
const deleteUserRoute = require('./src/user/port/deleteUser').deleteUser;
const getAllCategoriesRoute = require('./src/category/port/getAllcategories').getAllCategories;
const getOneCategoryRoute = require('./src/category/port/getOneCategory').getOneCategory;
const updateCategoryCountRoute = require('./src/category/port/updateCategoryCount').updateCategoryCount;
const swaggerOpt = require('./plugins/swagger').options;

async function startServer() {
    await app.listen({port}, (err: any) => {
        if (err) {
            console.log('error happened: ' + err)
            process.exit(1);
        } else {
            console.log(`========( Server is up at port ${app.server.address().port})========`);
        }
    })
}

async function main() {
    app.register(swaggerOpt)
    app.register(getAllCategoriesRoute, {prefix: "/category"});
    app.register(getOneCategoryRoute, {prefix: "/category"});
    app.register(updateCategoryCountRoute, {prefix: "/category"});
    app.register(signUpRoute, {prefix: "/user"});
    app.register(deleteUserRoute, {prefix: "/user"});
    app.register(loginRoute, {prefix: "/user"});

    //create sample data in db
    const migration = new Migration();
    await migration.createSampleData()
    await startServer()
}


main()