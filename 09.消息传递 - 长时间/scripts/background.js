let clientPort = null;
chrome.runtime.onConnect.addListener((port) => {
  clientPort = port;
  clientPort.postMessage({ say: "Connection established successfully!" });
  clientPort.onMessage.addListener((message) => {
    console.log("onMessage listener:", message.say);
  });
});