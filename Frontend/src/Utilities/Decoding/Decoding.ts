import { jwtDecode } from "jwt-decode";
import { DecodedTokenInfo } from "../../Utilities/Types/types";
import { getUserById } from "../../User/Services/UserServices";

export const getUserFromCookies = async(token: string) => { 

    console.log("token", token)
    //decodificar el token
    const decodedToken = jwtDecode<DecodedTokenInfo>(token); 
    console.log("decodedToken", decodedToken)
    //obtener el userId del token 
    const userId = decodedToken.user_id;
    console.log("userId", userId)
    //hacer al llamado al backend para obtener la info correspondiente
    const user =  await getUserById(userId);
    console.log("user", user)
    return user;
}