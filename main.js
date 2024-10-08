document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.getElementById("shareButton");
  const shareOverlay = document.getElementById("shareWindow");
  const shareImg = document.getElementById("shareImg");


  function closeOverlay() {
    shareOverlay.classList.remove("active");
    shareButton.classList.remove("active");
    shareImg.classList.remove("active");
  }


  function toggleOverlay() {
    shareOverlay.classList.toggle("active");
    shareButton.classList.toggle("active");
    shareImg.classList.toggle("active");
  }


  document.body.addEventListener("click", (event) => {
    if (
      !shareOverlay.contains(event.target) && event.target !== shareImg && shareOverlay.classList.contains("active")
    ) {
      closeOverlay();
    }
  });


  shareImg.addEventListener("click", toggleOverlay);
});
//Haha