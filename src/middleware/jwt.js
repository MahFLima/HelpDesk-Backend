import jwt from "jsonwebtoken";

export function createTokenJWT(id, nome, email, senha, departamento, tipo){
  const myKey = "M!nh@Ch@v&"
  const token = jwt.sign(
    {
      id, 
      nome, 
      email,
      senha,
      departamento, 
      tipo,
    }, myKey
  )

  return token
}