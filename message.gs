// Line Bot message reply API : https://developers.line.biz/zh-hant/reference/messaging-api/#message-objects


// reply  message base function
function replyMessage(replyToken, messageConfig, CHANNEL_ACCESS_TOKEN) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  var opt = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': messageConfig
    })
  };
  UrlFetchApp.fetch(url, opt);
}

// reply text message
function replyTextMessage(textMessage, replyToken, CHANNEL_ACCESS_TOKEN){
  var messageConfig = [{'type': 'text', 'text': textMessage}];
  replyMessage(replyToken, messageConfig, CHANNEL_ACCESS_TOKEN);
}

// reply YouTube link
function replyYouTubeLink(youtubeLink, replyToken, CHANNEL_ACCESS_TOKEN){
  var messageConfig = [{'type': 'text', 'text': youtubeLink}];
  replyMessage(replyToken, messageConfig, CHANNEL_ACCESS_TOKEN);
}

// reply image link
function replyImageLink(imageLink, replyToken, CHANNEL_ACCESS_TOKEN){
  var messageConfig = [
    {
      'type': 'image', // modify the type to 'image'
      'originalContentUrl': imageLink,
      'previewImageUrl': imageLink,
    }
  ];
  replyMessage(replyToken, messageConfig, CHANNEL_ACCESS_TOKEN);
}

// reply button
function replyButton(replyToken, CHANNEL_ACCESS_TOKEN){
  var messageConfig = [
    {
      'type': 'template',
      "altText": "This is a buttons template",
      "template" : {
        "type" : "buttons",
        "title" : "選擇回答",
        "text" : "請選擇",
        "thumbnail_image_url" : "https://i.imgur.com/xQF5dZT.jpg",
        "actions" : [
          {
            "type" : "message",
            "label" : "圖片",
            "text" : "圖片",
          },
          {
            "type" : "message",
            "label" : "按鈕",
            "text" : "按鈕",
          },
          {
            "type" : "message",
            "label" : "youtube",
            "text" : "youtube",
          },
        ],
      },
    }
  ];

  replyMessage(replyToken, messageConfig, CHANNEL_ACCESS_TOKEN);
}