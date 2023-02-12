export type UserSignUpResultTypeTest = {
  data: {
    status: string;
    result: {
      user: {
        name: string;
        email: string;
        password: string;
      },
      accessToken: string
    };
  }
};
