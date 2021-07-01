// [被动查询]因此不能放在全局环境中
// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   if (tabs.length) {
//     chrome.tabs.sendMessage(
//       tabs[0].id,
//       { say: "My name is background, and you?" },
//       (response) => {
//         console.log(response);
//       }
//     );
//   }
// });

// 接收消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message: ", message.say);
  sendResponse({
    reply: "Nice to meet you. content_script.js, my name is background.js",
  });
});
