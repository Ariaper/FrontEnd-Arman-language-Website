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
<link rel="stylesheet" href="components/Courses/courses.css">
<link rel="stylesheet" href="queries.css" />

<div class="container-fluid second-home-container">
<div class="container-fluid header-second-container">
<h4 class="h4-second-header pt-2">
  دوره های آموزشی آکادمی زبان انگلیسی آرمان
</h4>
<p class="p-second-header">شروع یادگیری و پیشرفت</p>
</div>
<div
class="container-fluid row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-center card-maincontainer"
style="max-width: 84rem"
>
<div class="col">
  <div class="card shadow rounded border">
    <img
      src="images/1.jpg"
      class="card-img-top img-fluid"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">دوره مناسب برای کودکان</h5>
      <a href="kid.html" class="btn btn-end btn-primary mt-3 btn-lg"
        >اطلاعات بیشتر</a
      >
    </div>
  </div>
</div>
<div class="col">
  <div class="card shadow rounded">
    <img
      src="images/2 (3).jpg"
      class="card-img-top img-fluid"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">دوره مناسب برای نوجوانان</h5>
      <a href="teenager.html" class="btn btn-primary mt-3 btn-lg"
        >اطلاعات بیشتر</a
      >
    </div>
  </div>
</div>
<div class="col">
  <div class="card shadow rounded">
    <img
      src="images/5.jpg"
      class="card-img-top img-fluid"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">دوره مناسب برای بزرگسالان</h5>
      <a href="adult.html" class="btn btn-primary mt-3 btn-lg"
        >اطلاعات بیشتر</a
      >
    </div>
  </div>
</div>
<div class="col">
  <div class="card shadow rounded">
    <img
      src="images/4.jpg"
      class="card-img-top img-fluid"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">دوره مناسب برای تربیت معلم</h5>
      <a href="#" class="btn btn-primary mt-3 btn-lg"
        >اطلاعات بیشتر</a
      >
    </div>
  </div>
</div>
<div class="col">
  <div class="card shadow rounded">
    <img
      src="images/3.jpg"
      class="card-img-top img-fluid"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">دوره مناسب برای کارمندان شرکت ها</h5>
      <a href="#" class="btn btn-primary mt-3 btn-lg"
        >اطلاعات بیشتر</a
      >
    </div>
  </div>
</div>
</div>
</div>
`
class Courses extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

export { Courses }