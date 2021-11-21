let video = document.getElementById('webcam');
let camera = navigator.mediaDevices.getUserMedia;

if (camera) {
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })

        .then((streamLive) => {
            video.srcObject = streamLive;
        })

        .catch((error) => {
            console.log("Camera Error! Please Try Again.....");
        })
}