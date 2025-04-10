# JXUFE.ICU Homepage托管仓库

🥰本网站部署在 https://jxufe.deno.dev 由 [deno](https://deno.com) 驱动.

🥸部署教程：

1. 在github创建一个仓库（需要deno与github联合）📦
2. 在仓库创建文件main.ts(deno服务端代码）🎊
```typescript
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve(async (req) => {
  const path = new URL(req.url).pathname;
  const filePath = path === "/" ? "/index.html" : path;

  try {
    const file = await Deno.readTextFile(`./static${filePath}`);
    return new Response(file, {
      headers: { "content-type": "text/html" },
    });
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
});
```
3. 在仓库创建文件夹static用于存储html、(css)文件🎉

> 文件结构如下
```
/
├── main.ts
└── static/
    └── index.html
```

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
