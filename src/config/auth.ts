
export default {
  secret_token: "ef56842f71f28848a5141a44ba5d7d80d", //Sign gera o token baseado na chave secreta gerada pelo MD5, mesma usada no AuthenticateUserUseCase.ts
  expires_in_token: "15m",
  secret_refresh_token: "405499b49cb5027d2bf03b0ac3dbeeff", //Sign gera o token baseado na chave secreta gerada pelo MD5,
  expires_in_refresh_token:"30d",
  expires_refresh_token_days: 30,
}