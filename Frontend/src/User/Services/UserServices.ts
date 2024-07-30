import { BASE_URL } from "../../Utilities/Constants";
import { User } from "../../Utilities/Types/types";
import axios from "axios";

export const postUser = async (user:User) => {
  try {
    console.log("user:", user);
    console.log("BASE_URL:", BASE_URL);
    const response = await axios.post(`${BASE_URL}/user/register/`, user);
    console.log("user:",response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};