const notification = chrome.notifications.create(null, {
  type: "basic",
  title: "消息弹窗",
  message: "少侠,我看你面色@#$%^&*",
  iconUrl: "assets/notification.png",
});
console.log("notification: ", notification);
