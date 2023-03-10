// import useAxiosApi from '/@/utils/useAxiosApi';

// /**
//  * 账号密码登录
//  * @returns UseAxiosReturn
//  */
// export function loginPassword() {
//   return useAxiosApi(`/api/login`, {
//     method: 'POST',
//     data: { name: '123' },
//   });
// }


import { ReqAuth, ReqParams, ResResult } from './model';
// import { get, post } from '/@/utils/useAxiosApi';
import {  post } from '/@/utils/useAxiosApi';

enum URL {
  login = '/api/login',
  getUserInfo = '/api/getInfo',
}

const loginPassword = async (data: ReqParams) => post<ResResult>({ url: URL.login, data });

const getUserInfo = async () => post<ReqAuth>({ url: URL.getUserInfo });

export default { loginPassword, getUserInfo };
