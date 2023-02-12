import {SignUpUserParams, UserLoginParams} from "../constant/userConstant";
import {charFilter, General_Errors} from "../../utils/utils";

export function validateUserSignUpInput(signUpUserParams: SignUpUserParams): SignUpUserParams {
  const {name, email, password} = signUpUserParams;
  if (!name || typeof name !== "string" ||
      !email || typeof email !== "string" ||
      !password || typeof password !== "string") {

    throw {err: General_Errors.REQUEST_BODY_IS_NOT_VALID};
  } else {
    signUpUserParams.name = charFilter(name);
    signUpUserParams.email = charFilter(email);

    return signUpUserParams;
  }
}

export function validateUserLoginInput(userLoginParams: UserLoginParams): UserLoginParams {
  const {email, password} = userLoginParams;
  if (!email || typeof email !== "string" ||
      !password || typeof password !== "string") {

    throw {err: General_Errors.REQUEST_BODY_IS_NOT_VALID};
  } else {
    return userLoginParams;
  }
}