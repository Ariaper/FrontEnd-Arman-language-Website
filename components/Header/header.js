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
      <a href="javascript:void(0)" class="closebtn"><span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="closebtn-svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
     </svg>
    </span></a>
      <a href="index.html" class="mobile-menu-items"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="list-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
    </span>صفحه اصلی</a>
      <a href="Courses.html" class="mobile-menu-items"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="list-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
    </span>ترم های آموزشی</a>
      <a href="classProgram.html" class="mobile-menu-items"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="list-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
    </span>برنامه کلاس ها</a>
      <a href="loginpage.html" class="mobile-menu-items"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="list-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
    </span>نمرات</a>
      <a href="PicGallery.html" class="mobile-menu-items"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="list-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
    </span>گالری تصاویر</a>
      <a href="loginpage.html" class="mobile-menu-items"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="list-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>    
    </span>ورود کاربران</a>
    </div>

    <button class="openbtn align-items-center justify-content-center" ><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="openbtn-svg">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg>
  </span></button>
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
        <a class="nav-link" href="loginpage.html">نمرات</a>
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
      this.shadowRoot.getElementById("mySidepanel").style.width = "25rem";
    })
    closeNav.addEventListener("click", () => {
      this.shadowRoot.getElementById("mySidepanel").style.width = "0";
    })

    /* Set the width of the sidebar to 0 (hide it) */

  }
}

export { Header }