var myPort = chrome.runtime.connect({ name: "join" });
myPort.onMessage.addListener((message) => {
  console.log("received message:", message.say);
});