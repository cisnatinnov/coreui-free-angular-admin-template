export interface register {
  id: Number,
  username: string,
  email: string,
  password: string
}

export interface login {
  identifier: string,
  password: string
}