# JXUFE.ICU Homepage托管仓库

🥰部署在https://jxufe.deno.dev由[deno](https://deno.com)驱动

🥸部署教程：

1. 在github创建一个仓库📦
2. 在仓库创建文件main.ts🎊
3. 在仓库创建文件夹static用于存储html、(css)文件🎉

> 文件结构如下
>
> /
> ├── main.ts录
> └── static/
>      └── index.html

在deno选择github仓库，填入以下内容：🐮

| 属性                 | 填写值     |
| -------------------- | ---------- |
| **Framework Preset** | `Unknown`  |
| **Install Step**     |            |
| **Build Step**       |            |
| **Root directory**   | `/`        |
| **Include files**    | `static/*` |
| **Exclude files**    | *.md       |
| **Entrypoint**       | `main.ts`  |
|                      |            |

Deploy😄
