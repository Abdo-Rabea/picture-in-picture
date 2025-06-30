const videoElement = document.getElementById("screenVideo");

async function startCapture() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true, // you can enable this if you want to capture audio too
    });

    videoElement.srcObject = stream;
  } catch (err) {
    console.error("Error: " + err);
    alert("Screen capture failed: " + err.message);
  }
}

async function enterPiP() {
  try {
    // Must be playing before PiP can be activated
    if (videoElement !== document.pictureInPictureElement) {
      await videoElement.requestPictureInPicture();
    } else {
      await document.exitPictureInPicture();
    }
  } catch (err) {
    console.error("Failed to enter Picture-in-Picture:", err);
  }
}
