import {UserSignUpResultTypeTest} from "./types/userSignUpResult.type";
import {userSignUpTest} from "./utils/userSignUpTest";
import {deleteUserTest} from "./utils/deleteUserTest";

describe("User", function () {
  it("should return success in user signup", async function () {
    const userSignUpResultTypeTest: UserSignUpResultTypeTest = await userSignUpTest();
    expect(userSignUpResultTypeTest.data.status).toEqual("success");
    expect(userSignUpResultTypeTest.data.result.accessToken).toEqual(expect.any(String));

    await deleteUserTest(userSignUpResultTypeTest.data.result.user.email);
  });
});
