const shareWindow = document.getElementById("share-window");
const shareButton = document.getElementById("shareButton");


shareButton.addEventListener("click", (e) => {
    shareWindow.classList.toggle("flex");
});