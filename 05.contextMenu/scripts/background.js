function genericOnClick(info, tab) {
  console.log("info, tab: ", info, tab);
}

const list = [
  {
    id: "text",
    type: "normal",
    title: "普通文本",
    contexts: ["all"],
  },
  {
    id: "radio1",
    type: "radio",
    title: "单选按钮 1",
    checked: false,
    contexts: ["all"],
  },
  {
    id: "radio2",
    type: "radio",
    title: "单选按钮 2",
    checked: false,
    contexts: ["all"],
  },
  {
    id: "checkbox1",
    type: "checkbox",
    title: "多选按钮 1",
    checked: false,
    contexts: ["all"],
  },
  {
    id: "checkbox2",
    type: "checkbox",
    title: "多选按钮 2",
    checked: true,
    contexts: ["all"],
  },
];

chrome.runtime.onInstalled.addListener(() => {
  for (let item of list) {
    let tempObj = {
      id: item.id,
      type: item.type,
      title: item.title,
    };

    if (item.checked) {
      Object.assign(tempObj, {
        checked: item.checked,
      });
    }

    chrome.contextMenus.create(tempObj);
  }
});
