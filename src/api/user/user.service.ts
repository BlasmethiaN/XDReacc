import { LoginUserResponseDto } from "./types/login-user-response.dto";
import axios from "axios";

type LoginInput = {
  username: string
  password: string
}

export class UserService {
  static async login(data: LoginInput) {
    return (await axios.post("/user/login", data)).data as LoginUserResponseDto
  }
}
