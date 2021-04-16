import { LoginUserResponseDto } from "./types/login-user-response.dto";
import axios from "axios";
import { RegisterUserResponseDto } from "./types/register-user-response.dto";

type LoginInput = {
  username: string
  password: string
}

type SignupInput = {
  username: string
  displayName: string
  email: string
  password: string
}
export class UserService {
  static async login(data: LoginInput) {
    return (await axios.post("/user/login", data)).data as LoginUserResponseDto
  }

  static async logout() {
    return await axios.post('/user/logout')
  }

  static async register(data: SignupInput) {
    return (await axios.post('/user/register', data)).data as RegisterUserResponseDto
  }

 
}
