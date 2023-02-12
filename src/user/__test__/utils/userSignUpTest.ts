import {UserSignUpResultTypeTest} from "../types/userSignUpResult.type";
import {UserSignUpMock} from "../mocks/userSignup.mock";
import axios from "axios";
import {JEST_VARIABLE} from "../../../../jest.env";

export const userSignUpTest = async (): Promise<UserSignUpResultTypeTest> => {
  let options = {
    method: 'post',
    url: `${JEST_VARIABLE.SERVER_URL}/user/signup`,
    data: UserSignUpMock,
    json: true,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };
  return await axios(options);
};
