import { ResponseDto } from "../../response.dto";

export enum UploadImageError {
  NOT_IMAGE = 'NOT_IMAGE',
}

export type UploadImageResponse = ResponseDto<{ path: string}, UploadImageError>
