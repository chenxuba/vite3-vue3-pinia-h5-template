import fetchApi from '../../api/user';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';
import { ReqParams } from '/@/api/user/model';
const { VITE_TOKEN_KEY } = import.meta.env;
const token = useCookies().get(VITE_TOKEN_KEY as string);
console.log(token);

interface StoreUser {
  token: string;
  info: Record<any, any>;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): StoreUser => ({
    token: token,
    info: {},
  }),
  getters: {
    getUserInfo(): any {
      return this.info || {};
    },
  },
  actions: {
    setInfo(info: any) {
      this.info = info ? info : '';
    },
    async login(params: ReqParams) {
      const res = await fetchApi.loginPassword(params);
      if (res) {
        // save token
        console.log(res);
        this.token = res.token
        useCookies().set(VITE_TOKEN_KEY as string, res.token);
      }
      return res;
    },
  },
  // persist: {
  //   key: 'token',
  //   storage: localStorage,
  //   paths: ['token'],
  // },
});
// export const useUserStore = defineStore('app-user', () => {
//   const Token = ref(token);
//   const info = ref<Record<any, any>>({});
//   const setInfo = (info: any) => {
//     info.value = info ? info : '';
//   };
//   const getUserInfo = () => {
//     return info || {};
//   };
//   const login = () => {
//     return new Promise((resolve) => {
//       const { data } = loginPassword();
//       watch(data, () => {
//         setInfo(data.value);
//         // useCookies().set(VITE_TOKEN_KEY as string, data.value.token);
//         resolve(data.value);
//       });
//     });
//   };
//   return {
//     Token,
//     info,
//     setInfo,
//     login,
//     getUserInfo,
//   };
// });
