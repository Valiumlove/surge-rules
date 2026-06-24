[General]
loglevel = notify
skip-proxy = 127.0.0.0/8, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, 162.14.0.0/16, 211.99.96.0/19, 162.159.192.0/24, 162.159.193.0/24, 162.159.195.0/24, fc00::/7, fe80::/10, localhost, *.local, captive.apple.com, passenger.t3go.cn, *.ccb.com, wxh.wo.cn, *.abcchina.com, *.abcchina.com.cn
test-timeout = 5
internet-test-url = http://connectivitycheck.platform.hicloud.com/generate_204
proxy-test-url = http://www.apple.com/generate_204
udp-priority = true
use-local-host-item-for-proxy = true
udp-policy-not-supported-behaviour = reject
dns-server = 223.5.5.5, 119.29.29.29, system
ipv6 = false
hijack-dns = 8.8.8.8:53, 8.8.4.4:531
read-etc-hosts = true
always-real-ip = *.msftncsi.com, *.msftconnecttest.com, *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com, *.battlenet.com.cn, *.battlenet.com, *.blzstatic.cn, *.battle.net, *.turn.twilio.com, *.stun.twilio.com, stun.syncthing.net, stun.*, 127.*.*.*.sslip.io, 127-*-*-*.sslip.io, *.127.*.*.*.sslip.io, *-127-*-*-*.sslip.io, 127.*.*.*.nip.io, 127-*-*-*.nip.io, *.127.*.*.*.nip.io, *-127-*-*-*.nip.io
show-error-page-for-reject = true
exclude-simple-hostnames = true
geoip-maxmind-url = https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb
http-api-web-dashboard = true
disable-geoip-db-auto-update = true
ipv6-vif = disabled
compatibility-mode = 0
http-api-tls = true

[Proxy]
JP-AnyTLS = anytls, 14.137.230.225, 57552, password=dlBLUpOxRmj4BLUM, skip-cert-verify=true, sni=community.apple.com

us机房家宽 = trojan, 216.36.108.163, 44527, password=8c55f07d-d7c9-4e29-8f75-a8f2333aa0a9, tfo=true, skip-cert-verify=true

🇯🇵xserver = trojan, www.shopify.com, 443, password=9637ea6c-601a-465b-bf1d-440a36a57ec3, ws=true, ws-path=/trojan, ws-headers=Host:"nav-item.ccwu.cc", sni=nav-item.ccwu.cc

洛圣都 = trojan, 23.141.204.247, 23998, password=b2028cf9-b298-4549-b961-e9fb7b1f76a5, skip-cert-verify=true

试手v6 = anytls, 2a0c:9a40:9210:4::18a, 443, password=01ca25a0f4b78a91139af88f536fb19c, skip-cert-verify=true, sni=example.com

🇺🇸ReCloud = anytls, 207.174.6.36, 60999, password=otXDsEiMgndk3egH, skip-cert-verify=true, sni=crl.apple.com

🇯🇵56云 = anytls, 140.99.243.151, 50414, password=taF6LEZOisqT7B4G, skip-cert-verify=true, sni=iphone.apple.com

奶思-🇸🇬-SG = snell, 158.178.235.86, 15243, psk=kt3qGIdUL8WH9wlt, version=5, reuse=true, tfo=true

[Proxy Group]
𝑷𝒓𝒐𝒙𝒚 = select, us机房家宽, 奶思-🇸🇬-SG, 🇯🇵56云, 🇺🇸ReCloud, 洛圣都, 试手v6, JP-AnyTLS, 𝑨𝒎𝒆𝒓𝒊𝒄𝒂, icon-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/menhera/Sticker_1207.png, no-alert=0, hidden=0, include-all-proxies=0, update-interval=-1
𝑨𝒎𝒆𝒓𝒊𝒄𝒂 = select, 🇺🇸ReCloud, 洛圣都, 试手v6, us机房家宽, no-alert=1, hidden=1, include-all-proxies=0, update-interval=-1, policy-regex-filter=(?i)(🇺🇸|美), icon-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/pokemon/172.png, persistent=1
代理轮询 = load-balance, 洛圣都, 试手v6, 🇺🇸ReCloud, 奶思-🇸🇬-SG, us机房家宽, JP-AnyTLS, persistent=0, policy-regex-filter=.+, no-alert=1, hidden=0, include-all-proxies=0, icon-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/quanqiu(3).png

[Rule]
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/Globalmeda.list,𝑨𝒎𝒆𝒓𝒊𝒄𝒂,"update-interval=-1" // 全球媒体
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/AI.list,JP-AnyTLS,"update-interval=-1" // 人工智能
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/Telegram.list,𝑨𝒎𝒆𝒓𝒊𝒄𝒂,"update-interval=-1" // 电报
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/douying.list,洛圣都,"update-interval=-1" // 抖音
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/apple.list,DIRECT,"update-interval=-1" // Apple
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/Emby.list,DIRECT,"update-interval=-1" // Emby
RULE-SET,https://raw.githubusercontent.com/Valiumlove/surge-rules/main/Rules/Proxy.list,𝑷𝒓𝒐𝒙𝒚,"update-interval=-1" // 漏网
DOMAIN,api.wetalkapp.com,代理轮询
DOMAIN,api.pingmeapp.net,代理轮询
RULE-SET,LAN,DIRECT
GEOIP,CN,DIRECT,no-resolve
FINAL,𝑷𝒓𝒐𝒙𝒚

[Host]
updates.cdn-apple.com = updates.cdn-apple.com.download.ks-cdn.com
*.cloud-nodes.com = server:124.221.68.73:1053
91.108.56.100 = 91.108.56.147,91.108.56.201
91.108.56.101 = 91.108.56.147,91.108.56.201
91.108.56.104 = 91.108.56.147,91.108.56.201
91.108.56.107 = 91.108.56.147,91.108.56.201
91.108.56.120 = 91.108.56.147,91.108.56.201
91.108.56.125 = 91.108.56.147,91.108.56.201
91.108.56.126 = 91.108.56.147,91.108.56.201
91.108.56.128 = 91.108.56.147,91.108.56.201
91.108.56.156 = 91.108.56.147,91.108.56.201

[URL Rewrite]
^https?://(www\.)?(g|google)\.cn https://www.google.com 307

[MITM]
h2 = true
hostname = interface.music.163.com, interface3.music.163.com, interface9.music.163.com, httpdns.n.netease.com, ipv4.music.163.com, www.google.cn, api.wetalkapp.com, app.bilibili.com, www.nodeseek.com, api.pingmeapp.net
hostname-disabled = api.pingmeapp.net, www.nodeseek.com, api.wetalkapp.com, www.google.cn
ca-passphrase = 2C2CE079
ca-p12 = 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

[Script]
滴滴出行小程序去广告 = type=http-response,pattern=^https?:\/\/common\.diditaxi\.com\.cn\/common\/v5,script-path=https://raw.githubusercontent.com/Valiumlove/surge-signin-scripts/main/ddcxAD.js,requires-body=1,max-size=-1,binary-body-mode=0,script-update-interval=-1
WeTalk-Run签到 = type=cron,cronexp="0 8,12,18 * * *",wake-system=1,timeout=120,script-path=https://raw.githubusercontent.com/Nixi-N/Tool/main/JS/Wetalk.js,script-update-interval=0
PingMe签到 = type=cron,cronexp=0 */4 * * *,script-path=https://raw.githubusercontent.com/naixueqwq/surge-signin-scripts/main/pingMe%E7%AD%BE%E5%88%B0,timeout=300,script-update-interval=0,debug=1

[Panel]
FlushDNS = script-name=FlushDNS,update-interval=600

