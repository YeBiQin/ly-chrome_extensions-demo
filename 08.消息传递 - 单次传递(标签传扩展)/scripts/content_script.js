chrome.runtime.sendMessage(
  {
    say: "Hello background.js, My name is content_script.js",
  },
  (response) => {
    console.log(response.reply);
  }
);