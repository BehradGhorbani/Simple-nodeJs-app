0. run "npm i -s"

1. .env file should be created based on .env.example fields manually.

2. use ts-node bootstrap.ts or "npm start" to run code.

3. dataBase named uniTech should be created manually before code runs with command: "CREATE DATABASE uniTech" in sql.

4. then run "npx prisma migrate dev --name init"

5. swagger documentation is at /doc route.

6. use Authorization button in swagger to place auth token for all requests.

7. you should first create user and then use the accessToken in every request header except login and signup.

8. token should be placed in authorization field in requests header.

9. only user authentication flow has e2e test.

10. you can run test with "jest" command or "npm test".
