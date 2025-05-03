# Next.js获取和更新数据有如下方式

* API Router：Restfull端点
  * 多客户端公用API：如果你希望此后端不仅用于本项目，其他项目也可以共享数据
  * 代理现有后端：如果已经有了其他后端，或者需要请求其他上游API，也称为BFF（Backend for Frontend）
  * Webhook集成：如果收到外部回调或Webhook（如Github、支付宝）则可以使用路由处理器
  * 自定义身份验证：如果您需要会话、令牌或其他身份验证逻辑，您可以在 Next.js API 层中存储 Cookie、读取标头并使用适当的数据进行响应
  * 构建共享中间件逻辑：例如身份验证、日志记录
* Server Actions：以提交表单为例。Fetch需要用客户端的Onclick触发事件提交数据，而Server Actions是将参数场地到服务器处理
  * API Router或者Route Handler：pages router模式使用Api Router，APP Router模式使用Route Handler
* Fetch（本文件下的所有代码都是服务端fetch）：在服务器中Fetch，直接在服务渲染或者将 promise 作为 prop 传递给你的 Client 组件，在客户端组件使用使用 use 钩子来读取 promise

## Pages Router

* 需放在pages/api目录下，文件名会映射到 API 的路径。例如，pages/api/users.ts会对应/api/users这个 API 端点
* 单个导出
* 采用 Express.js 风格的 API，接收req（请求）和res（响应）对象作为参数

## App Router (Default)

* 需放在app目录下，按照路由结构组织文件。比如，要处理/api/users的请求，文件路径可能是app/api/users/route.ts
* 多个导出，同一个端点可以导出多个不同的HTTP方法
* 使用现代的 Web API 标准，像Request和Response对象。它支持使用 TypeScript 的类型注解，能更好地与现代前端开发工具集成
* 默认不缓存数据，缓存GET方法请使用Route Config

## Fetch

* 和使用React Fetch数据一样，不推荐

## 服务器组件

* Fetch API
  * 默认 auto no cache 和 cache： 'no-store'在开发中不显示新数据
* ORM
* Server Actions：也叫服务器函数

## 客户端组件

* React use钩子
  * 通过将 Promise 作为 prop 从 Server Component 传递到 Client Component，可以将数据从服务器流式传输到客户端。
* SWR和React Query
