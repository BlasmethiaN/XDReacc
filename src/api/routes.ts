import { CurrentUserResponseDto } from "./user/types/user-responses";
import useSWR from "swr";

export enum Route {
  CURRENT_USER = '/user',
  USER_INFO = '/user',
  CONTRIBUTION = '/contribution'
}

export const useCurrentUser = () => useSWR<CurrentUserResponseDto>(Route.CURRENT_USER)
