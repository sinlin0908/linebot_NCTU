function getUserProfile(userID){
  var　url　=　"https://api.line.me/v2/bot/profile/" + userID;
  var getResult = 　UrlFetchApp.fetch(url,　{
　　　　'headers':　{
　　　　　　'Authorization':　'Bearer '　+　CHANNEL_ACCESS_TOKEN,
　　　　},
　　　　'method':　'get',
　　});
  return JSON.parse(getResult);
}

function appendDialogueHistory(sheet,displayName,message){
  var now = new Date();
  var date = Utilities.formatDate(now, "GMT+8", "MM/dd/yyyy");
  var time = Utilities.formatDate(now, "GMT+8", "HH:mm");

  sheet.appendRow([date,time,displayName,message]);
}

function saveDialogueHistory(sheet,userID,messageConfig){
  var profile = getUserProfile(userID);
  console.log("profile: "+profile);
  var userID = profile.userId;
  console.log("userID: "+userID);
  var userName = profile.displayName;
  appendDialogueHistory(sheet, userName, messageConfig.user);
  appendDialogueHistory(sheet, LINEBOT_ID, messageConfig.bot);
}