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
<link rel="stylesheet" href="components/Classprogram/classProgram.css">
<link rel="stylesheet" href="queries.css" />

<div class="container mt-3">
  <div class=" row">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">صفحه اصلی</a></li>
        <li class="breadcrumb-item active" aria-current="page">برنامه کلاسی</li>
      </ol>
    </nav>
    <div class="justify-content-center align-items-center col-md-8 pt-3">
      <h4 class="classprogram-text">
        برنامه کلاسی Class program
      </h4>
      <p class="class-date-text pb-2">شروع ترم از شنبه 23 اردیبهشت</p>
      <img src="images/ClassProgram/class1.jpg" alt="" class="rounded d-block w-100 pb-1 card-img-top img-fluid">
      <img src="images/ClassProgram/class2.jpg" alt="" class="rounded d-block w-100 card-img-top img-fluid">
    </div>

  </div>
</div>`

class Classprogram extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

export { Classprogram }