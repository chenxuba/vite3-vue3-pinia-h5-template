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
import { get, post } from '/@/utils/useAxiosApi';

enum URL {
  login = '/api/login',
  getUserInfo = '/v1/user/permission',
}

const loginPassword = async (data: ReqParams) => post<ResResult>({ url: URL.login, data });

const getUserInfo = async () => get<ReqAuth>({ url: URL.getUserInfo });

export default { loginPassword, getUserInfo };
