let username = document.querySelector("h1.text-heading-xlarge").textContent;
let user_location = document.querySelector("span.text-body-small.inline").textContent;


if (window.location.href.includes("/overlay/contact-info") === true) {
  let contact_info = document.getElementsByClassName("pv-contact-info__ci-container")
  var arr = []
  for (let i = 0; i < contact_info.length; i++) {
    arr.push(contact_info[i].innerText)
  }
  chrome.runtime.sendMessage({ contact_info: arr }, () => {
    for (let i = 0; i < contact_info.length; i++) {
      console.log((contact_info[i].innerText));
    }
  });
}

chrome.runtime.sendMessage({ username, user_location }, () => {
  console.log(`username: ${username}`);
  console.log(`address: ${user_location}`);
});
