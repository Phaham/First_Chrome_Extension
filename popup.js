const button = document.getElementById("check");
const tabTitle = document.querySelector('.title');
const taburl = document.querySelector('.url');
const wrapper = document.querySelector('.wrapper');
const disabled_btn = document.querySelector('.disabled');

const input = document.querySelectorAll('.input-field');
const like = document.querySelector('.like');
const comment = document.querySelector('.comment');

function enable() {
  button.disabled = false;
  button.classList.remove('disabled');
}

function disable() {
  button.disabled = true;
  button.classList.add('disabled');
}

like.addEventListener('keyup', function () {
  if (like.value != "" && comment.value != "") {
    enable();
  } else {
    disable();
  }
})
comment.addEventListener('keyup', function () {
  if (like.value != "" && comment.value != "") {
    enable();
  } else {
    disable();
  }
})


const sendData = async (data) => {
  let queryOptions = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(queryOptions, async (tab) => {
    // chrome.tabs.update(tab.id, {url: 'https://www.linkedin.com/feed/'});
    chrome.tabs.sendMessage(tab[0].id, data, async (response) => {
      console.log(await response);
    });
  });
}


button.addEventListener("click", async () => {
  let likeData = parseInt(like.value);
  let commentData = parseInt(comment.value);

  let data = {
    likeData: likeData,
    commentData: commentData
  }

  await sendData(data);
});


document.addEventListener('DOMContentLoaded', () => {
  wrapper.classList.remove('hidden');
});
