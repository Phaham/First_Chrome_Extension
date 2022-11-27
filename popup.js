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

const update_url = (arr) => {
  setTimeout(function () {
    for (let i = 0; i < arr.length; i++) {
      chrome.tabs.update(
        { url: arr[i] }
      );
    }
  }, 5000);
}


button.addEventListener("click", () => {
  let input = document.getElementById("links").value;
  let Links_arr = input.substring(1, input.length - 1).split(",");

  let link = [];

  Links_arr.forEach(user_link => {
    let exact_url = user_link.trim();

    link.push(exact_url.substring(1, exact_url.length - 1))
    link.push(exact_url.substring(1, exact_url.length - 1) + "/overlay/contact-info")
  })

  update_url(link);
});

// Array Of LinkedIn Profiles - ["https://www.linkedin.com/in/isanur-sardar/", "https://www.linkedin.com/in/mohd-ajmal-6ab006217/","https://www.linkedin.com/in/mohd-saif-b62a61201/"]

document.addEventListener('DOMContentLoaded', () => {
  wrapper.classList.remove('hidden');
});
