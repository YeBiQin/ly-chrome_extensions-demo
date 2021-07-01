function randomColor() {
  var tempColor = "#";
  for (var i = 0; i < 3; i++) {
    tempColor += Math.floor(Math.random() * 255).toString(16);
  }
  return tempColor;
}

let num = 0;
const btn = document.getElementById("btn");
btn.onclick = function () {
  const { browserAction } = chrome;
  browserAction.setBadgeText({ text: `${++num}` });
  browserAction.setBadgeBackgroundColor({ color: randomColor() });
};
