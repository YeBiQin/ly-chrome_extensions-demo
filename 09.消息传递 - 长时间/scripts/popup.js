// let clientPort = null;
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   if (tabs.length) {
//     console.log("clientPort: ", clientPort);
//     clientPort = chrome.tabs.connect(tabs[0].id, { name: "join" });
//     clientPort.onMessage.addListener((message) => {
//       console.log("onMessage listener:", message.say);
//     });
//   }
// });