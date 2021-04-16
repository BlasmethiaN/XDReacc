import { ResponseDto } from "../../response.dto";

export enum CreateContributionError {
  NO_TITLE = 'NO_TITLE',
}

export type CreateContributionResponse = ResponseDto<{ id: number}, CreateContributionError>
