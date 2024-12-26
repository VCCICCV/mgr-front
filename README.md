# 这是TGM的前端项目

## Stack

* Next.js
* Tailwindcss
* three.js
* react-three-fiber
* react-three-drei
* rspack

## 快速开始

```bash
npm i
```

设置端口

```json
  "scripts": {
    "dev": "next dev -p 9000",
    "start": "next start -p 9000",
  },
```

启动

```bash
npm run dev
```

## 说明

import type 仅仅导入被用于类型注解或声明的声明语句，它总是会被完全删除，因此在运行时将不会留下任何代码
export type 仅仅提供一个用于类型的导出，在 TypeScript 输出文件中，它也将会被删除

## 目录

* types：类型定义
* components：组件
* constants：一些固定的值，如页脚信息

## 部署

## 介绍

* Layout：布局，用于提供共享的结构或框架，在框架内可以展示多个page
* page：页面用户能看到的内容单元
