# Next.js获取和更新数据有如下方式

* Server Actions：推荐
  * API Router或者Route Handler：pages router模式使用Api Router，APP Router模式使用Route Handler
* Fetch：
以提交表单为例。Fetch需要用客户端的Onclick触发事件提交数据，而Server Actions是将参数场地到服务器处理

## API Routes

* 需放在pages/api目录下，文件名会映射到 API 的路径。例如，pages/api/users.ts会对应/api/users这个 API 端点
* 采用 Express.js 风格的 API，接收req（请求）和res（响应）对象作为参数

## Router handler

* 需放在app目录下，按照路由结构组织文件。比如，要处理/api/users的请求，文件路径可能是app/api/users/route.ts
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
