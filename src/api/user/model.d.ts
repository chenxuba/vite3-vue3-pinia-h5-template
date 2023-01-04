export interface ReqParams {
  username: string;
  password: string;
}

export interface ReqAuth {
  _id: string
  username: string
  password: string
  nickname: string
  avatar: string
  huixinCode: string
  paiyipai: string
  date: string
  __v: number
}

export interface ResResult {
  code: number;
  message: string;
  token: string;
}
