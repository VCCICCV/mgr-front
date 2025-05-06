# Authentication&Authorization 身份验证与授权

## Sign Up 注册

用户首次创建新账户

## Sign In 登录

已有账户的用户通过凭证验证身份

## Sign On 登录/单点登录(todo)

通过第三方服务验证身份（如Google/GitHub登录）

## 双Token应该存储在哪里？

* sessionStorage：会话期间存储临时数据，严格遵循同源策略，仅同一标签页内共享数据，新标签页或窗口打开相同 URL 会创建独立的存储空间，关闭标签或窗口后自动清除
  * 临时保存表单草稿、多步骤流程状态
* Cookie：每次 HTTP 请求自动携带同源 Cookie，仅通过 HTTPS 传输，防止 JavaScript 访问，防范 XSS 攻击
  * session Cookie：浏览器关闭失效
  * persistent Cookie；通过 Expires 或 Max-Age 设置过期时间
  * 存储访问Token
* localStorage：数据永久存储，需手动清除或通过代码删除；严格同源策略，同一域名下所有标签页共享数据，不随 HTTP 请求发送
  * 长期保存用户偏好设置（如主题、语言、刷新Token）
