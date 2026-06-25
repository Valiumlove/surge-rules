<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:16213e,100:0f3460&height=200&section=header&text=Surge%20Rules&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=分流%20·%20模块%20·%20脚本%20·%20配置&descColor=a0c4ff&descAlignY=62&descSize=20)

<p>
  <a href="https://github.com/Valiumlove/surge-rules/stargazers"><img src="https://img.shields.io/github/stars/Valiumlove/surge-rules?style=for-the-badge&logo=github&color=FFD700&labelColor=1a1a2e" alt="Stars"></a>
  <a href="https://github.com/Valiumlove/surge-rules/commits"><img src="https://img.shields.io/github/last-commit/Valiumlove/surge-rules?style=for-the-badge&logo=github&color=4fc3f7&labelColor=1a1a2e" alt="Last Commit"></a>
  <a href="https://nssurge.com"><img src="https://img.shields.io/badge/Surge-iOS%20%26%20Mac-e94560?style=for-the-badge&labelColor=1a1a2e" alt="Surge"></a>
</p>

</div>

---

## ⚙️ 远程配置订阅

复制下方链接，在 Surge 中选择「从 URL 下载配置」粘贴即可：

```
https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/conf/PersonalConfiguration.conf
```

> ⚠️ 配置内含个人代理节点信息，使用前请根据自身情况修改 `[Proxy]` 与 `[Proxy Group]` 部分

---

## 📂 目录

| 文件夹 | 说明 |
|:---|:---|
| `Rules/` | 分流规则集 |
| `Module/` | Surge 模块 `.sgmodule` |
| `JavaSesponse/` | JS 脚本 |
| `conf/` | 个人配置文件 |

---

## 🚀 使用方式

**引用规则**

```ini
[Rule]
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/xxx.list,PROXY
```

**安装模块** — Surge → 模块 → 安装外部模块

```
https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Module/xxx.sgmodule
```

> 💡 若 `raw.githubusercontent.com` 访问受阻，将域名替换为 `cdn.jsdelivr.net/gh/Valiumlove/surge-rules@main`

![footer](https://capsule-render.vercel.app/api?type=waving&color=0:0f3460,50:16213e,100:1a1a2e&height=100&section=footer)
