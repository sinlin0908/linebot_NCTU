// Setting reply rules for text type messages
function textReplyHandler(messageText,replyToken){
  var replyMessage; // the content of reply
  switch(messageText){
      case "你好":
      case "安安":
       replyMessage = "安安";
       replyTextMessage(replyMessage, replyToken, CHANNEL_ACCESS_TOKEN);
       return replyMessage;
      case "早安":
       replyMessage = "不早了";
       replyTextMessage(replyMessage, replyToken, CHANNEL_ACCESS_TOKEN);
       return replyMessage;
      case "圖片":
       replyMessage = "https://www.bomb01.com/upload/news/original/b6c976efb4645d54c3bcaccd1551c757.jpg";
       replyImageLink(replyMessage, replyToken, CHANNEL_ACCESS_TOKEN);
       return replyMessage;
      case "youtube":
       replyMessage = "https://www.youtube.com/watch?v=TBkybgllGRA";
       replyYouTubeLink(replyMessage, replyToken, CHANNEL_ACCESS_TOKEN);
       return replyMessage;
      case "按鈕":
       replyButton(replyToken, CHANNEL_ACCESS_TOKEN);
       return "按鈕";
      default:
       replyMessage = "怎樣啦";
       replyTextMessage(replyMessage, replyToken, CHANNEL_ACCESS_TOKEN);
       return replyMessage;
  }
}

// Handling the type of the message
// type table : https://developers.line.biz/zh-hant/reference/messaging-api/#message-event
function messageHandler(message,replyToken){
  var messageType = message.type;
  var messageID = message.id;

  switch(messageType){
    case "text":  // text message
      var messageText = message.text; // user message
      var botReply = textReplyHandler(messageText,replyToken);
      return {
        "user" :  messageText,
        "bot" : botReply,
      };
    case "sticker": // sticker message
      return;
  }
}

// Handling the type of the event
function eventHandler(event){
  var eventType = event.type;
  var replyToken = event.replyToken; // get replyToken

  switch (eventType) {
    case 'postback':
      break;
    case 'message':
      var messageConfig = messageHandler(event.message,replyToken);
      return messageConfig;
    default:
      break;
  }
}