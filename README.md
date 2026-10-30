<div align="center">

# ⚡ Surge 规则集合

<img src="https://img.shields.io/badge/Surge-规则-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/一键-订阅-green?style=for-the-badge">
<img src="https://img.shields.io/badge/简单-易用-orange?style=for-the-badge">

<br/>

### 📦 简单 · 清晰 · 即开即用

</div>

---

## 📌 项目介绍

本仓库整理了适用于 Surge 的分流规则、功能模块、脚本和配置。规则按应用与服务分类，帮助你决定不同网络请求应走代理还是直接连接。

- **Rules**：按服务分类的规则集，可单独订阅
- **Module**：扩展 Surge 功能的模块
- **conf**：Surge 配置文件

规则集只负责匹配流量；实际使用的策略（如代理节点或 DIRECT）由你在 Surge 中选择。

## 🚀 快速开始：添加单条规则

1. 在下方目录中找到需要的应用，复制对应的 **Raw 规则链接**。
2. 打开 Surge：**首页 → 代理规则 → 新增 → 增加新规则集**。
3. 粘贴链接，选择策略，保存并启用规则。

规则文件是供 Surge 订阅的纯文本列表。无需在浏览器中直接打开或逐行查看；订阅后，后续更新可在 Surge 中刷新。

## 🧭 规则目录

| 分类 | 服务 | 规则文件 | 建议策略 | Raw 规则链接 |
| --- | --- | --- | --- | --- |
| 🎬 流媒体 | Netflix | `Netflix.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Netflix.list) |
| 🎬 流媒体 | Disney+ | `Disney.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Disney.list) |
| 🎬 视频 | YouTube | `YouTube.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/YouTube.list) |
| 🎵 音乐 | Spotify | `spotify.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/spotify.list) |
| 📱 社交 | Instagram | `Instagram.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Instagram.list) |
| 📱 社交 | Telegram | `Telegram.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Telegram.list) |
| 🎮 游戏 | Game | `Game.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Game.list) |
| ☁️ 云服务 | Microsoft | `Microsoft.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Microsoft.list) |
| ☁️ 云服务 | Google | `Google.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Google.list) |
| 🍎 苹果 | Apple | `apple.list` | DIRECT | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/apple.list) |
| 🇨🇳 国内媒体 | Chinese Media | `chinesemedia.list` | DIRECT | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/chinesemedia.list) |
| 📺 媒体服务 | Emby | `Emby.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Emby.list) |
| 🌐 代理集合 | Proxy Nodes | `Proxy.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Proxy.list) |
| 🔄 网络测速 | Speed Test | `Speedtest.list` | DIRECT | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Speedtest.list) |
| 🎬 社交媒体 | TikTok | `tiktok.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/tiktok.list) |
| 🤖 AI 服务 | AI | `AI.list` | PROXY | [复制 / 查看](https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/AI.list) |

## ⚙️ 策略说明

- **PROXY**：在 Surge 中将该规则集的策略设为你的代理策略或策略组。
- **DIRECT**：让匹配的请求直接连接。
- 表中的策略是仓库目录给出的建议；请按自己的网络环境、节点和配置调整。
- 各服务的具体匹配范围以对应规则文件为准。

## 💡 使用提示

- 使用前先确认 Surge 中已配置可用策略或代理节点。
- 订阅链接用于 Surge 导入规则；需要查看内容时，可打开对应规则文件。
- 规则更新后，在 Surge 中刷新规则集订阅即可。
- 某些功能模块可能需要额外设置 MITM；这不适用于所有规则集。
- 此仓库兼容 Surge iOS / macOS；使用前请按自己的配置检查 `[Proxy]` 与 `[Proxy Group]`。

## 📂 浏览仓库

- [Rules 规则目录](https://github.com/Valiumlove/surge-rules/tree/Hermit/Rules)
- [规则使用说明](https://github.com/Valiumlove/surge-rules/blob/Hermit/Rules/README.md)
- [仓库首页](https://github.com/Valiumlove/surge-rules)

---

<div align="center">

### 简单 · 强大 · 持续更新

</div>
