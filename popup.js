
// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// const tab = getCurrentTab();
const button = document.getElementById("check");
const tabTitle = document.querySelector('.title');
const taburl = document.querySelector('.url');
const wrapper = document.querySelector('.wrapper');

button.addEventListener("click", async () => {
  chrome.tabs.query(
    { "currentWindow": true, "active": true },
    function (tabs) {
      let gettitle = tabs[0].title;
      let geturl = tabs[0].url;

      tabTitle.innerHTML = gettitle;
      taburl.innerHTML = geturl;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  wrapper.classList.remove('hidden');
});