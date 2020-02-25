/*
Kxdao forum daily bonus script
Update 2020-2-26 00:51:47
About the author:
If reproduced, indicate the source
Telegram channel: @ImQiMu
Description :
Need to manually log in to the https://www.kxdao.net/home.php?mod=space checkin to get cookie.
[task_local]
# Kxdao daily bonus script
0 10 * * * Kxdao_DailyBonus_QX.js
[rewrite_local]
# Get cookie. 【QX TF188+】:
https:\/\/www\.kxdao\.net\/home\.php\?mod=space url script-request-header Kxdao_GetCookie_QX.js
# MITM = www.kxdao.net
*/

var WAPJ = $request.headers["Cookie"];

if (WAPJ) {
  if ($prefs.valueForKey("CookieWA") != undefined) {
    if ($prefs.valueForKey("CookieWA") != WAPJ) {
      var cookie = $prefs.setValueForKey(WAPJ, "CookieWA");
      if (!cookie) {
        $notify("更新科学刀签到Cookie失败‼️", "", "")
      } else {
        $notify("更新科学刀签到Cookie成功 🎉", "", "")
      }
    }
  } else {
    var cookie = $prefs.setValueForKey(WAPJ, "CookieWA");
    if (!cookie) {
      $notify("首次写入科学刀Cookie失败‼️", "", "")
    } else {
      $notify("首次写入科学刀Cookie成功 🎉", "", "")
    }
  }
}
$done({})
