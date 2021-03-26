import { ResponseDto } from "../../response.dto";

export enum RegisterError {
  USERNAME_EXISTS = 'USERNAME_EXISTS',
  EMAIL_EXISTS = 'EMAIL_EXISTS',
  PASSWORDS_DONT_MATCH = 'PASSWORDS_DONT_MATCH'
}

export type RegisterUserResponseDto = ResponseDto<{ userId: number }, RegisterError>
