/*
Kxdao forum daily bonus script
Update 2020-2-26 00:48:02
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

var bonus = {
  url: 'https://www.kxdao.net/plugin.php?id=dsu_amupper&ppersubmit=true&formhash=c7f9d7c1&infloat=yes',
  headers: {
    "Cookie": $prefs.valueForKey("CookieWA"),
  }
};
var date = new Date()
var week = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
var month = ["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];

$task.fetch(bonus).then(response => {
      if (response.body.match(/\u606d\u559c\u60a8/)) {
      $notify("Kxdao Daily bonus", "", week[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + "Daily bonus success！🎉")
    } else {
      if (response.body.match(/\u4e0b\u671f\u518d\u6765/)) {
        $notify("Kxdao Daily bonus", "", week[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + "Repeat ⚠️")
      } else {
        if (response.body.match(/\u9700\u8981\u5148\u767b\u5f55/)) {
          $notify("Kxdao Daily bonus. Error. Cookies expire", "", "Please reopen the script to get‼️")
        } else {
          $notify("Kxdao Daily bonus", "", "Scripts need to be updated ‼️‼️")
        }
      }
    }
}, reason => {
    $notify("Kxdao Daily bonus. Interface error‼️‼️‼️", "", reason.error)
});
