const btn = document.getElementById("btn");
btn.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { say: "My name is popup, and you?" },
        (response) => {
          console.log(response.reply);
        }
      );
    }
  });
};
