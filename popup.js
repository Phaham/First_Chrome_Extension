const button = document.getElementById("check");
const wrapper = document.querySelector('.wrapper');

const overlay = document.querySelector('.popup')
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const video = document.querySelector('.video');

const EXTENSION_ID = 'cglldpiidbaijkonhmcmjgfienagpijd';
const request = { sources: ['tab'] };
let stream;


button.addEventListener("click", async () => {
  button.classList.add('hidden');
  overlay.classList.remove('hidden');
});

start.addEventListener('click', () => {
  chrome.runtime.sendMessage(EXTENSION_ID, request, response => {

    if (response && response.type === 'success') {
      navigator.mediaDevices.getDisplayMedia({
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: response.streamId,
          }
        }
      }).then(returnedStream => {
        stream = returnedStream;
        video.src = URL.createObjectURL(stream);
        start.innerHTML = 'STOP';
      }).catch(err => {
        console.error('Could not get stream: ', err);
      });
    } else {
      console.error('Could not get stream');
    }

  });
});


// Method - 2

// start.addEventListener('click', () => {
//   chrome.runtime.sendMessage(sender, request, response => {
//     const startCapture = async () => {
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: {
//           mediaSource: "tab",
//         }
//       })
//       startCapture();
//       const data = [];
//       const mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = (e) => {
//         data.push(e.data);
//       };
//       start.addEventListener('click', (e) => {
//         mediaRecorder.start();
//       })

//       stop.addEventListener('click', (e) => {
//         video.src = URL.createObjectURL(new Blob(data, {
//           type: data[0].type,
//         }))
//       })
//     }
//   });
// });



document.addEventListener('DOMContentLoaded', () => {
  wrapper.classList.remove('hidden');
});
