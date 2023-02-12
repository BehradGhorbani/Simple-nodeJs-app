import axios from "axios";
import {JEST_VARIABLE} from "../../../../jest.env";

export const deleteUserTest = async (email: string): Promise<boolean> => {
  let options = {
    method: 'delete',
    url: `${JEST_VARIABLE.SERVER_URL}/user/delete`,
    data: {email},
    json: true,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };
  return await axios(options);
};
