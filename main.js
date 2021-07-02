Webcam.set({
    width: 310,
    hegiht: 300,
    img_formate: 'png',
    png_qualitiy: 90
})
camera = document.getElementById("camera")
Webcam.attach(camera)