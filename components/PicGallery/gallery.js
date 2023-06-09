const $ = document
const template = $.createElement("template")
template.innerHTML = `
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.rtl.min.css"
integrity="sha384-+qdLaIRZfNu4cVPK/PxJJEy0B0f3Ugv8i482AKY7gwXwhaCroABd086ybrVKTa0q"
crossorigin="anonymous"
/>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="components/PicGallery/gallery.css">
<link rel="stylesheet" href="queries.css" />

<div class="container mt-5">
  <div class="imgdiv">
    <img src="/images/Gallery/1.jpg" alt="Nature" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/2.jpg" alt="Snow" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/3.jpg" alt="Mountains" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/5.jpg" alt="Lights" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/6.jpg" alt="Lights" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/7.jpg" alt="Lights" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/8.jpg" alt="Lights" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/9.jpg" alt="Lights" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/10.jpg" alt="Lights" class="img img-fluid" onclick="myFunction(this);">
  </div>
  <div class="imgdiv">
    <img src="/images/Gallery/11.jpg" alt="Lights" class="img img-fluid" onclick="myFunction(this);">
  </div>
</div>

`
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


class PicGallery extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}



export { PicGallery, myFunction }