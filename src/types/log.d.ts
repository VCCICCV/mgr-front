// types/log.d.ts
export interface LoginLog {
  id: string;
  user_id: string;
  username: string;
  domain: string;
  login_time: string;
  ip: string;
  port: number;
  address: string;
  user_agent: string;
  request_id: string;
  type: string;
  created_at: string;
  created_by: string;
}

export interface PaginatedLogs {
  current: number;
  size: number;
  total: number;
  records: LoginLog[];
}
// declare namespace Log {
//   type LoginLog = Api.Common.CommonRecord<{
//     username: string;
//     domain: string;
//     loginTime: string;
//     port: number | null;
//     address: string;
//     userAgent: string;
//     requestId: string;
//     type: string;
//   }>;

//   type LoginLogList = Api.Common.PaginatingQueryRecord<LoginLog>;

//   type LoginLogSearchParams = CommonType.RecordNullable<
//     Pick<LoginLog, "username" | "domain" | "address" | "type"> &
//       Api.Common.CommonSearchParams
//   >;

//   type OperationLog = Api.Common.CommonRecord<{
//     userId: string;
//     username: string;
//     domain: string;
//     moduleName: string;
//     description: string;
//     requestId: string;
//     method: string;
//     url: string;
//     ip: string;
//     userAgent: string | null;
//     // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//     params: any;
//     // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//     body: any;
//     // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//     response: any;
//     startTime: string;
//     endTime: string;
//     duration: number;
//   }>;

//   type OperationLogList = Api.Common.PaginatingQueryRecord<OperationLog>;

//   type OperationLogSearchParams = CommonType.RecordNullable<
//     Pick<OperationLog, "username" | "domain" | "moduleName" | "method"> &
//       Api.Common.CommonSearchParams
//   >;
// }
