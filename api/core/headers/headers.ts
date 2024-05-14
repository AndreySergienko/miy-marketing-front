import {TOKEN_NAME} from "~/store/auth/auth.store";

export const authHeaders = (): HeadersInit => ({
  Authorization: `Bearer ${useCookie(TOKEN_NAME).value || ""}`,
});
export const defaultHeaders = (): HeadersInit => ({});
