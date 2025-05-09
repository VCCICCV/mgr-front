# Server Actions

* 您可以将 Server Actions 视为可从客户端调用的自动生成的 POST API 路由。
* 专为更改作而设计，例如创建、更新或删除数据。您可以像普通的 JavaScript 函数一样调用 Server Action，而不是显式提取定义的 API 路由。

> 只要往服务器函数传递了props，那这个服务器函数就是Server Actions
>
## Forms调用Server Actions

* React 扩展了 HTML <form>元素，以允许使用 HTML action 属性调用服务器函数
* 在客户端组件中通过`action`、`formAction`可以导入使用Server Actions
* 在Server Actions中可以通过`formData.get`获取数据

## Event Handlers 事件处理器调用Server Actions

* 在客户端组件中通过事件处理程序（如 `onClick`）调用Server Actions

```tsx
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
```

## 项目规范

* 查询使用Fetch
* 创建、更新、删除使用 Server Actions
