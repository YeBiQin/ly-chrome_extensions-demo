// 接收消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message: ", message.say);
  sendResponse({
    reply: "Nice to meet you. content_script.js, my name is background.js",
  });
});
