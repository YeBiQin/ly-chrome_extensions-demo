chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message: ", message.say);
  sendResponse({ reply: "回复 1" });
  sendResponse({ reply: "回复 2" });
  sendResponse({ reply: "回复 3" });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message: ", message.say);
  sendResponse({ reply: "回复 4" });
  sendResponse({ reply: "回复 5" });
  sendResponse({ reply: "回复 6" });
});
