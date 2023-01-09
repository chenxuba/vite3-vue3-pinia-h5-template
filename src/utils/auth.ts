import { useCookies } from '@vueuse/integrations/useCookies';
import { VITE_TOKEN_KEY } from '../../build/constant';

export function getToken() {
  return useCookies().get(VITE_TOKEN_KEY as string) || '';
}

export function setToken(token: string) {
  useCookies().set(VITE_TOKEN_KEY as string, token);
}

export function removeToken() {
  useCookies().remove(VITE_TOKEN_KEY as string);
}
