import {User} from "../entity/user";

export type SignUpUserParams = {
    name: string,
    email: string,
    password: string,
}

export type UserLoginParams = {
    email: string,
    password: string,
}

export type UserAuthOutputType = {
    user: User,
    accessToken: string
}