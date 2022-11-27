// console.log('hello');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(JSON.stringify(message))  
});