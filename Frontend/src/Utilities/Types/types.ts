export interface PostUser{
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface User{
  id: BigInteger;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface DecodedTokenInfo{
  exp:BigInteger
  iat:BigInteger
  jti:string
  token_type:string
  user_id: BigInteger
}