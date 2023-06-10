let modal = document.getElementById("myModal");

var img = document.querySelector(".img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function myFunction(event) {

  modalImg.classList.remove("modal-content-large-img")
  modal.style.display = "block";
  modalImg.src = event.src;
  captionText.innerHTML = event.alt;
  if (modalImg.clientHeight / modalImg.clientWidth > 0.9) {
    modalImg.classList.add("modal-content-large-img")
  }
}

var span = document.getElementsByClassName("close")[0];

function closeButtonSpan() {
  modal.style.display = "none";
}

