import api from "../../Api";
import { BASE_URL } from "../../Utilities/Constants";
import { PostUser } from "../../Utilities/Types/types";

export const postUser = async (user:PostUser) => {
  try {
    const response = await api.post(`${BASE_URL}/user/register/`, user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id: BigInteger) => { 
  try {
    const response = await api.get(`${BASE_URL}/user/${id}`);
    console.log("getUserById", response.data);
    return {status: 200, data: response.data };
  } catch(error) {
    console.log(error);
    return error;
  }
};