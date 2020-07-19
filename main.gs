// input your CHANNEL_ACCESS_TOKEN
var CHANNEL_ACCESS_TOKEN = '';
// input your google sheet URL
var　GOOGLE_SHEET_URL　=　"";
// history user id
var MAIN_USER_ID = "";
// linebot id
var LINEBOT_ID = "";

// e 是Line 給我們的資料
function doPost(e) {
  console.log('info:' + e.postData.contents);
  var dataFromLine = JSON.parse(e.postData.contents);
  var　sheet　=　SpreadsheetApp.openByUrl(GOOGLE_SHEET_URL).getActiveSheet();

  try {
    var events = dataFromLine.events;

    if (events == null) {return;}

    for (var i in events) {
      var event = events[i];
      var messageConfig = eventHandler(event);

      var userID = event.source.userId;

    // save dialogue history
    //  if(userID === MAIN_USER_ID){
    //    saveDialogueHistory(sheet,userID,messageConfig);
    //  }

    }

  } catch(ex) {
   console.log(ex);
  }
}