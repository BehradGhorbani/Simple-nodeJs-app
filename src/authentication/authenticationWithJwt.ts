import {User} from "../user/entity/user";
import {FastifyRequest} from "fastify/types/request";
import {sign, verify} from "jsonwebtoken"
import {General_Errors} from "../utils/utils";

export async function createJwtToken(payload: any): Promise<string>{
    const secret = process.env["JWT_SECRET"] ? process.env["JWT_SECRET"] : '';
    return sign(payload,secret, { expiresIn: "120m" });
}

export async function getUserWithToken(req: FastifyRequest): Promise<User> {
    return new Promise((resolve, reject) => {
        const secret = process.env["JWT_SECRET"] ? process.env["JWT_SECRET"] : '';
        const token = req.headers['authorization']

        if (!token) {
            reject({ reason: General_Errors.NO_TOKEN});
        } else {
            verify(token, secret, function (err, decoded) {
                if (err) {
                    reject({ reason: General_Errors.NOT_AUTHENTICATED });
                } else {
                    let user = decoded as User;
                    resolve(user);
                }
            });
        }
    });
}