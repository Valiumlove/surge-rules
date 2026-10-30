<div align="center">

# ⚡ Surge 规则集合

### 按服务分类 · 订阅导入 · 持续更新

</div>

---

## 📌 项目介绍

本仓库收录 Surge 分流规则，覆盖广告过滤、AI、流媒体、社交平台、云服务、游戏、音乐及网络工具等类别。

每个 `.list` 文件都是独立规则集。选择需要的服务，将 Raw 链接添加到 Surge，再为规则集选择对应策略。

## 🚀 添加规则

1. 在下方目录找到需要的规则，打开对应 Raw 链接并复制地址。
2. 打开 Surge：**首页 → 代理规则 → 新增 → 增加新规则集**。
3. 粘贴链接，选择策略，保存并启用。
4. 后续有更新时，在 Surge 中刷新规则集订阅。

> 规则文件是给 Surge 订阅用的纯文本列表。`AdvertisingLite.list` 和 `reject.list` 都较大，直接用浏览器打开可能会卡顿；建议复制 Raw 链接，在 Surge 中订阅。

## 🧭 完整规则目录

| 分类 | 服务 / 用途 | 规则文件 | 说明中标注的策略 | Raw 链接 |
| --- | --- | --- | --- | --- |
| 🤖 AI | AI | `AI.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/AI.list) |
| 🛡️ 广告过滤 | Advertising Lite | `AdvertisingLite.list` | REJECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/AdvertisingLite.list) |
| 🎬 流媒体 | Disney+ | `Disney.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Disney.list) |
| 📺 媒体服务 | Emby | `Emby.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Emby.list) |
| 📱 社交平台 | Facebook | `Facebook.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Facebook.list) |
| 🎮 游戏 | Game | `Game.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Game.list) |
| 🌐 国际媒体与服务 | Globalmeda | `Globalmeda.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Globalmeda.list) |
| ☁️ 云服务 | Google | `Google.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Google.list) |
| 📱 社交平台 | Instagram | `Instagram.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Instagram.list) |
| ☁️ 云服务 | Microsoft | `Microsoft.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Microsoft.list) |
| 🎬 流媒体 | Netflix | `Netflix.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Netflix.list) |
| 💳 支付服务 | PayPal | `PayPal.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/PayPal.list) |
| 🌐 代理节点集合 | Proxy Nodes | `Proxy.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Proxy.list) |
| 🔄 网络测速 | Speed Test | `Speedtest.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Speedtest.list) |
| 📱 社交平台 | Telegram | `Telegram.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/Telegram.list) |
| 🎬 视频 | YouTube | `YouTube.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/YouTube.list) |
| 🛒 电商与云服务 | Amazon | `amazon.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/amazon.list) |
| 🍎 苹果服务 | Apple | `apple.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/apple.list) |
| 📺 视频 | Bilibili | `bilibili.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/bilibili.list) |
| 🇨🇳 国内媒体 | Chinese Media | `chinesemedia.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/chinesemedia.list) |
| 🏠 直连规则 | Direct | `direct.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/direct.list) |
| 💬 社交平台 | Discord | `discord.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/discord.list) |
| 📺 视频 | 抖音 DouYin | `douying.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/douying.list) |
| 📺 视频 | iQIYI | `iqiyi.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/iqiyi.list) |
| 🎵 音乐 | 网易云音乐 | `neteasemusic.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/neteasemusic.list) |
| 🔞 成人内容 | Pornhub | `pornhub.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/pornhub.list) |
| 🌐 代理规则 | Proxy | `proxy.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/proxy.list) |
| 🚫 拦截规则 | Reject | `reject.list` | REJECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/reject.list) |
| 🎵 音乐 | Spotify | `spotify.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/spotify.list) |
| 🎮 游戏平台 | Steam | `steam.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/steam.list) |
| 📺 视频 | 腾讯视频 | `tencentvideo.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/tencentvideo.list) |
| 📱 社交媒体 | TikTok | `tiktok.list` | PROXY | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/tiktok.list) |
| 📺 视频 | 优酷 Youku | `youku.list` | DIRECT | [Raw](https://raw.githubusercontent.com/Valiumlove/surge-rules/Hermit/Rules/youku.list) |

## ⚙️ 策略说明

规则目录的使用说明明确标注了部分规则的建议策略：

- **PROXY**：在 Surge 中选择自己的代理策略或策略组。
- **DIRECT**：让匹配的请求直接连接。
- 标为“未指定”的规则没有在目录说明中标注策略，请根据规则用途和自己的 Surge 配置选择。
- `Proxy.list` 与 `proxy.list` 是两个不同文件；添加时请核对文件名大小写。

## 💡 使用提示

- 使用前确认 Surge 中已经配置可用的代理策略或节点。
- Raw 链接用于 Surge 订阅规则集；无需把规则内容粘贴进配置文件。
- 订阅规则更新后，可在 Surge 中刷新规则集。
- 仓库中的部分模块可能需要配置 MITM；MITM 并非所有规则集的必需项。
- 使用完整配置时，请按自己的节点信息检查 `[Proxy]` 和 `[Proxy Group]`。

## 📂 仓库

- [Rules 规则目录](https://github.com/Valiumlove/surge-rules/tree/Hermit/Rules)
- [Rules 使用说明](https://github.com/Valiumlove/surge-rules/blob/Hermit/Rules/README.md)
- [仓库首页](https://github.com/Valiumlove/surge-rules)
