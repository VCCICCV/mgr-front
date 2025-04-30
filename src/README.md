## 文件夹

* public：存储静态资源，如图片、字体等，public 内的文件可以从基础 URL（ / ）开始引用
* app：应用路由
* pages：页面路由
* actions：服务端操作，处理表单提交、数据库写入等业务逻辑
* lib：存放​​通用工具函数、数据获取逻辑、第三方库封装​​，与 UI 解耦
* ：
* ：
* ：
* ：
* ：
* ：
* ：

## 顶级文件

* next.config.js：Next.js 配置文件
* package.json：项目依赖和脚本
* instrumentation.ts：OpenTelemetry 和仪表化文件
* middleware.ts：Next.js 请求中间件
* .env：环境变量
* .env.local：本地环境变量
* .env.production：生产环境变量
* .env.development：开发环境变量
* .eslintrc.json：ESLint 配置文件
* .gitignore：忽略的 Git 文件和文件夹
* next-env.d.ts：Next.js 的 TypeScript 声明文件
* tsconfig.json：TypeScript 配置文件
* jsconfig.json：JavaScript 配置文件
## 路由文件

* layout：布局
* page：页面
* loading：加载 UI
* not-found：未找到 UI
* error： 错误 UI
* global-error： 全局错误 UI
* route：API 端点
* template：重新渲染的布局
* default：并行路由回退页面
## 动态路由

* [folder]：动态路由段
* [...folder]：通配符路由段
* [[...folder]]：可选的通配符路由段
## 路由分组和私有文件夹

* (folder)：分组路由而不影响路由
* _folder：将文件夹及其所有子段排除在路由之外
## 并行路由和拦截路由

* @folder：命名插槽
* (.)folder： 拦截同一级别
* (..)folder：拦截上一级别
* (..)(..)folder：在两层之上拦截
* (...)folder：从根目录拦截
## 元数据文件约定

* favicon.ico：网站图标文件
* ：
* ：
* ：
* ：
* ：
