import {FastifyReply} from "fastify/types/reply";
const crypto = require('crypto');

export const General_Errors = {
    REQUEST_BODY_IS_NOT_VALID : "REQUEST_BODY_IS_NOT_VALID",
    REQUEST_PARAM_IS_NOT_VALID : "REQUEST_PARAM_IS_NOT_VALID",
    NO_TOKEN: "NO_TOKEN",
    UNKNOWN: "UNKNOWN",
    OBJECT_NOT_FOUND: "OBJECT_NOT_FOUND",
    TOKEN_NOT_VALID: "TOKEN_NOT_VALID",
    USER_EXISTS: "USER_EXISTS",
    INCORRECT_CREDENTIALS: "INCORRECT_CREDENTIALS",
    NOT_AUTHENTICATED: "NOT_AUTHENTICATED"
}

//simple function to hash strings using crypto
export function md5Hasher(text: string): string {
    const hashGenerator = crypto.createHmac("md5", process.env["MD5_SECRET"])
    return hashGenerator.update(text).digest('hex')
}

export class Output {
    // used for regular responses
    readonly rep;

    constructor(rep: FastifyReply) {
        this.rep = rep
    }
    async result(result: any, status: number): Promise<void>{
        this.rep.status(status).send({
            status: 'success',
            result,
        })
    }

    // used for error responses
    async error(msg: any, status: number): Promise<void>{
        this.rep.status(status).send({
            status: 'failed',
            err: {
                msg
            },
        })
    }
}

//To Prevent xss and html injection

const bannedCharacters = ["<", ">"];
export function charFilter(text: string): string {
    for (let i = 0; i < text.length; i++) {
        if (bannedCharacters.includes(text[i])) {
            text = text.replace(text[i], "*");
        }
    }
    return text;
}