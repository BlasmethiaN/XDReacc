import { ResponseDto } from "../../response.dto";

export enum LoginError {
  WRONG_USERNAME = 'WRONG_USERNAME',
  WRONG_PASSWORD = 'WRONG_PASSWORD',
}

export type LoginUserResponseDto = ResponseDto<{ userId: number }, LoginError>
