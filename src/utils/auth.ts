import { useCookies } from "@vueuse/integrations/useCookies";
const { VITE_TOKEN_KEY } = import.meta.env;

export function getToken() {
  return useCookies().get(VITE_TOKEN_KEY as string) || '';
}

export function setToken(token: string) {
  useCookies().set(VITE_TOKEN_KEY as string, token);
}

export function removeToken() {
  useCookies().remove(VITE_TOKEN_KEY as string);
}
