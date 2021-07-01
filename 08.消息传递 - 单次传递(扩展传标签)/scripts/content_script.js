chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("sender: ", sender);
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : `from the extension message: ${message.say}`
  );
  if (message.say)
    //判断是否为要处理的消息
    sendResponse({ reply: "My name is content_script.js" });
});
