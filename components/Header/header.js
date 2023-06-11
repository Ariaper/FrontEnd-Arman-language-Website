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
<link rel="stylesheet" href="components/Header/header.css">
<link rel="stylesheet" href="queries.css" />


<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
<div
  class="container-fluid"
  style="margin-right: 1.6rem; margin-left: 6.4rem"
>
  <div class="navbar-header">
    <a class="navbar-brand navbar-text-brand armanbrand" href="index.html"
      >آکادمی زبان آرمان</a
    >
  </div>

  <div class="menu-nav-mobile">
      <div id="mySidepanel" class="sidepanel">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <a href="index.html">صفحه اصلی</a>
      <a href="Courses.html">ترم های آموزشی</a>
      <a href="classProgram.html">برنامه کلاس ها</a>
      <a href="#">نمرات</a>
      <a href="PicGallery.html">گالری تصاویر</a>
    </div>

    <button class="openbtn align-items-center justify-content-center" >&#9776;</button>
  </div>

  <div class="collapse navbar-collapse navbar-div-menu">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item navbar-li-menu-items">
        <a class="nav-link border-bottom-1" href="index.html">صفحه اصلی</a>
      </li>
      <li class="nav-item navbar-li-menu-items">
        <a class="nav-link" href="Courses.html">ترم های آموزشی</a>
      </li>
      <li class="nav-item navbar-li-menu-items">
        <a class="nav-link" href="classProgram.html"> برنامه کلاس ها </a>
      </li>
      <li class="nav-item navbar-li-menu-items">
        <a class="nav-link" href="#">نمرات</a>
      </li>
      <li class="nav-item navbar-li-menu-items">
        <a class="nav-link" href="PicGallery.html">گالری تصاویر</a>
      </li>
    </ul>
    <div class="d-grid gap-2">
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg"
        data-mdb-ripple-color="dark"
      >
        ورود اساتید و دانش آموزان
      </button>
      
      <button type="button" class="btn btn-info btn-lg">
        دریافت مشاوره و پشتیبانی
      </button>
    </div>
  </div>
</div>
</nav>
`

class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
    /* Set the width of the sidebar to 250px (show it) */
    const openNav = this.shadowRoot.querySelector(".openbtn");
    const closeNav = this.shadowRoot.querySelector(".closebtn");

    openNav.addEventListener("click", () => {
      this.shadowRoot.getElementById("mySidepanel").style.width = "250px";
    })
    closeNav.addEventListener("click", () => {
      this.shadowRoot.getElementById("mySidepanel").style.width = "0";
    })

    /* Set the width of the sidebar to 0 (hide it) */

  }
}

export { Header }