import { ResponseDto } from "../../response.dto";

export enum CreateContributionError {
  NO_TITLE = 'NO_TITLE',
  NO_IMAGE = 'NO_IMAGE'
}

export type CreateContributionResponse = ResponseDto<{ id: number}, CreateContributionError>
