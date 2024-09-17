const shareWindow = document.getElementById("share-window");
const shareButton = document.getElementById("shareButton");


shareButton.addEventListener("click", (e) => {
    if (shareWindow.style.display === "none" || shareWindow.style.display === "") {
        shareWindow.style.display = "flex";
    } else {
        shareWindow.style.display = "none";
    }
});