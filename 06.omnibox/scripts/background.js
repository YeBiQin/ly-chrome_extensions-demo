const contentMap = {
  百度搜索: "https://www.baidu.com/",
  谷歌搜索: "https://www.google.com/",
  搜狗搜索: "https://www.sogou.com/",
  新浪微博: "https://weibo.com/",
  腾讯微博: "https://t.qq.com/",
  搜狐微博: "https://t.sohu.com/",
};
// 重新聚焦并输入值
chrome.omnibox.onInputStarted.addListener(() => {
  console.log("启用 Chrome Extension Omnibox 功能!");
});
// 关键词变化事件
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  if (text === "搜索") {
    suggest([
      { content: "百度搜索", description: "使用百度搜索引擎" },
      { content: "谷歌搜索", description: "使用谷歌搜索引擎" },
      { content: "搜狗搜索", description: "使用搜狗搜索引擎" },
    ]);
  } else if (text == "微博") {
    suggest([
      { content: "新浪微博", description: "打开新浪微博" },
      { content: "腾讯微博", description: "打开腾讯微博" },
      { content: "搜狐微博", description: "打开搜狐微博" },
    ]);
  }
});
// 回车选择事件
chrome.omnibox.onInputEntered.addListener((text) => {
  const url = contentMap[text];
  if (url) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length) {
        chrome.tabs.update(tabs[0].id, { url: url });
      }
    });
  }
});
// 失焦事件
chrome.omnibox.onInputCancelled.addListener(() => {
  console.log("关闭 Chrome Extension Omnibox 功能!");
});