import { BASE_URL } from "../../Utilities/Constants";
import { PostUser } from "../../Utilities/Types/types";
import api from "../../Api";

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
    return response.data;
  } catch(error) {
    console.log(error);
    return error;
  }
};