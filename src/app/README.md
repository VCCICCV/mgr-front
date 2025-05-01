# Next.js

## Layout 布局

* 布局是在多个页面之间共享的 UI。在导航时，布局会保留状态、保持交互性并且不会重新渲染
* 根布局是必须的，必须包含`HTML`和`BODY`标签

## Nest Layout嵌套布局

##

## Page 页面

* 页面是在特定路由上呈现的 UI

## Navigating 导航

在 Next.js 中，有四种方法可以在 routes 之间导航

* 使用`<Link>`组件
  * 建议使用`<Link>`组件除非特殊需求使用`useRouter`
* 使用`next/router`模块的`useRouter`钩子
  * 客户端使用
* 使用`redirect`函数
  * 服务端组件中使用
* 使用`History API`

### Link 页面之间的链接

* 可以使用`<Link>`组件在路由之间导航，它扩展了 HTML`<a>`标记以提供预取和客户端导航，这是在 Next.js 中在路由之间导航的主要和推荐方式

```ts
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

### `useRouter`钩子

* 以编程的方式更改客户端组件的路由

```ts
'use client'

import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```

### `redirect`函数

* 以编程的方式更改服务器组件的路由

```ts
import { redirect } from 'next/navigation'
 
async function fetchTeam(id: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  if (!id) {
    redirect('/login')
  }
 
  const team = await fetchTeam(id)
  if (!team) {
    redirect('/join')
  }
 
  // ...
}
```
>
> * `redirect`默认返回`307`状态码，在 Server Action 中使用时，它会返回 303 （See Other），这通常用于作为 POST 请求的结果重定向到成功页面
> * `redirect`在内部抛出错误，因此应在 try/catch 块之外调用它
> * `redirect` 在渲染过程中可以在 Client Components 中调用，但不能在事件处理程序中调用。可以改用`useRouter`钩子
> `redirect`接受绝对 URL，可用于重定向到外部链接
> `redirect`只能在渲染后重定向，在渲染过程之前重定向请使用`next.config.js`或`Middleware`

### History API

* 可以使用`window.history.pushState`和`windows.history.replaceState`来更新浏览器的历史记录堆栈，而无需重新加载页面
* `pushState`和`replaceState`调用集成到 Next.js Router 中，允许您与`usePathname`和`useSearchParams`同步

#### `window.history.pushState`

向浏览器的历史记录堆栈添加新条目，用户可以导航回以前的状态

```ts
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SortProducts() {
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
 
  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}
```

#### `window.history.replaceState`

替换浏览器的当前历史记录条目，用户无法导航回以前的状态

```ts
'use client'
 
import { usePathname } from 'next/navigation'
 
export function LocaleSwitcher() {
  const pathname = usePathname()
 
  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }
 
  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  )
}
```

### 路由和导航原理

App Router 使用混合方法进行路由和导航

* 服务端路由：自动按路由进行代码拆分
* 客户端路由：Next.js预取并缓存路由段，导航时浏览器不会重新加载页面，只有更改路由的部分会重新渲染

## Route Groups 路由组

在`app`目录中，嵌套文件夹通常映射到 URL 路径。但是，您可以使用`()`将文件夹标记为路由组 ，以防止该文件夹包含在路由的 URL 路径中

可用于：

* 分组路由
* 分组页面
* 分组布局
>
> * 路径组的命名除了组织之外没有特殊意义。它们不会影响 URL 路径
> * 包含路由组的路由不应解析为与其他路由相同的 URL 路径。例如，由于路由组不会影响 URL 结构， 因此 （marketing）/about/page.js 和 （shop）/about/page.js 都会解析为 /about 并导致错误
> * 如果您使用多个根布局而没有顶级 layout.js 文件，则应在其中一个路由组中定义主 page.js 文件，例如：app/（marketing）/page.js
> * 跨多个根布局导航将导致整个页面加载 （与客户端导航相反）。例如，从使用 app/（shop）/layout.js 的 /cart 导航到使用 app/（marketing）/layout.js 的 /blog 将导致整个页面加载。这仅适用于多个根布局
>
## Dynamic Routes 动态路由

不知道确切的分段名称，并且想要从动态数据创建路由，则可以使用在请求时填写或在构建时预呈现的动态分段，例如`[id]`、`slug`或`[...slug]`

## Parallel Routes 并行路由

Parallel Routes 允许您使用`@`同时或有条件地呈现同一布局中的一个或多个页面。它们对于应用程序的高度动态部分非常有用，例如社交网站上的仪表板和源

## Conditional Routes 条件路由

根据特定条件（例如用户角色）有条件地呈现路由,例如，要为 /admin 或 /user 角色呈现不同的仪表板页面

## 何时使用服务端组件何时使用客户端组件

### 服务端组件（Server Components）

* 数据获取：当页面需要从多个数据源（如数据库、第三方 API 等）获取和处理大量数据时，使用服务端组件能在服务器端完成数据的获取和处理，减少客户端的负担。例如电商网站的商品列表页，需要从数据库中查询大量商品信息，并进行筛选、排序等操作。
* 数据敏感：对于包含敏感信息的数据，如用户的私密信息、财务数据等，使用服务端组件可以在服务器端处理和渲染，避免敏感数据暴露在客户端
* SEO：服务端组件在服务器端渲染页面内容，搜索引擎爬虫可以直接获取到完整的 HTML 内容，有利于搜索引擎优化（SEO）
* 性能优化：服务端组件在服务器端预先渲染页面，客户端只需要接收和显示渲染好的 HTML，减少了客户端的渲染时间，提高了页面的加载速度。对于需要快速展示内容的页面，如文章详情页、活动页面等，使用服务端组件可以提升用户体验。

### 客户端组件（Client Components）

* 交互性需求：当页面需要处理用户的交互事件，如点击、滚动、输入等，使用客户端组件可以方便地绑定事件处理函数。例如，一个带有按钮点击事件的表单页面，点击按钮后会触发提交表单的操作。
* 状态管理：对于需要在客户端维护和管理状态的场景，如购物车、点赞功能等，客户端组件可以使用 React 的状态管理机制（如 useState、useReducer）来实现
* 浏览器API依赖：当页面需要使用浏览器的特定 API，如 localStorage、Geolocation 等，客户端组件可以直接访问这些 API
* 