export const authHeaders = (): HeadersInit => ({
  Authorization: `Bearer ${useCookie("afToken").value}`,
});
export const defaultHeaders = (): HeadersInit => ({});
