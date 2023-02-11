import {Migration} from "./dbMigration/dbMigration";

const fastify = require('fastify');
const app = fastify()
const dotenv = require("dotenv")
dotenv.config()

const getAllCategoriesRoute = require('./category/port/getAllcategories').getAllCategories;
const getOneCategoryRoute = require('./category/port/getOneCategory').getOneCategory;
const updateCategoryCountRoute = require('./category/port/updateCategoryCount').updateCategoryCount;

function startServer() {
    const port = process.env["PORT"];
    app.listen(port, (err: any, add: any) => {
        err ? console.log('error happened: ' + err) : console.log(`========( Server is up at ${add} )========`)
    })
}

async function main() {
    app.register(getAllCategoriesRoute, {prefix: "/category"});
    app.register(getOneCategoryRoute, {prefix: "/category"});
    app.register(updateCategoryCountRoute, {prefix: "/category"});

    const migration = new Migration();
    await migration.createSampleData()
    startServer()
}


main()