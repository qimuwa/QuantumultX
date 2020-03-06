# 配置
[MITM] *.video.qq.com, v.qq.com

[rewrite_local]
^https://access.video.qq.com/user/auth_refresh url script-request-header videoqq.cookie.js ^https?://v.qq.com/x/bu/mobile_checkin url script-request-header videoqq.cookie.js

[task_local] 1 0 * * * videoqq.js

1. 先把v.qq.com加到[MITM]
2. 手机浏览器访问下: https://film.qq.com/ 随便选 1 部电影观看
3. 手机浏览器访问下: http://v.qq.com/x/bu/mobile_checkin 页面提示提示签到成功, 系统提示: 获取Cookie: 成功 （为保成功率，请刷新一下页面再获取一次）
4. 运行下签到脚本看是否提示
5. 最后就可以把第 1 条脚本注释掉了
