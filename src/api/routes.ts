import { CurrentUserResponseDto } from "./user/types/current-user-response";
import useSWR from "swr";

export enum Route {
  CURRENT_USER = '/user'
}

export const useCurrentUser = () => useSWR<CurrentUserResponseDto>(Route.CURRENT_USER)
