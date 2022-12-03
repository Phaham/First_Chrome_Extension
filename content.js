
let likeCount, commentCount;
chrome.runtime.onMessage.addListener((count, sender, sendResponse) => {
  sendResponse({ msg: "Recived" });
  console.log(count);
  likeCount = count.likeData;
  commentCount = count.commentData;

  react();
  // like(0);
  // comment(0);
});



let i = 0, j = 0;
function react() {

  if (i < likeCount) {
    let like = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .feed-shared-social-action-bar__action-button .react-button__trigger')[i];
    console.log(like);

    like.click();
    i++;
  }
  if (j < commentCount) {
    let commentbtn = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .comment span div button')[j]
    commentbtn.click()
    let comment = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .feed-shared-update-v2__comments-container .comments-comment-box .comments-comment-box__form-container .comments-comment-texteditor .comments-comment-box-comment__text-editor .editor-container .editor-content .ql-editor p')[j];
    comment.innerHTML = "CFBR";
    let post = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .social-details-social-activity .feed-shared-update-v2__comments-container .comments-comment-box .comments-comment-box__form-container form')[j].querySelectorAll('div button')[2]
    post.click();
    j++;
  }
}
setInterval(react, 4000);


// function like(i) {
//   if (i < likeCount) {
//     // if (i >0) {
//     setTimeout(() => {
//       let likebtn = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .feed-shared-social-action-bar__action-button .react-button__trigger')[i];
//       console.log(likebtn);

//       likebtn.click();
//       like(++i);
//       // like(i--);
//     }, 3000);
//   } else {
//     return
//   }
// };

// function comment(j) {
//   if (i < commentCount) {
//     setTimeout(() => {
//       let commentbtn = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll(".comment-button")[i];
//       commentbtn.click();

//       setTimeout(()=>{
//       let commentText = document.querySelectorAll(".editor-content p")[i];
//       commentText.innerHTML = "CFBR";
//       },500);
//       let commentSubmit = document.querySelector(".comments-comment-box__submit-button")[i];
//       commentSubmit.click();

//       comment(++i);
//     }, 3000);
//   } 

//   else {
//     return
//   }
// };
