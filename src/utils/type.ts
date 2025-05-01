export interface RequestInstanceState {
  /** 请求是否刷新令牌 */
  refreshTokenFn: Promise<boolean> | null;
  /** 请求错误消息*/
  errMsgStack: string[];
}
