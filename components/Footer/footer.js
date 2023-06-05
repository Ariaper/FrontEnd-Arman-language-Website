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
<link rel="stylesheet" href="components/Footer/footer.css">
<link rel="stylesheet" href="queries.css" />

<footer class="text-center text-lg-start text-white footer">
<section class="">
  <div class="container text-center text-md-start mt-5">
    <div class="row">
      <div
        class="footer-textinformation col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mt-5 mb-3"
      >
        <h6 class="mb-4">ارتباط با ما:</h6>
        <p>آدرس: سیرجان-مکی آباد، جنب کلانتری</p>
        <p>ایمیل: arman.english.institute@gmail.com</p>
        <p>
          شماره تلفن ثابت:
          <a class="tell-number" href="tel:+03442268527">42268527-034</a>
        </p>
        <p>
          برای کسب اطلاعات بیشتر در مورد دوره ها و آموزشگاه ، میتونید هم
          به صورت حضوری و هم غیر حضوری با ما در ارتباط باشید.
        </p>
      </div>

      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto pt-5 googlemap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3475.62140099809!2d55.666540659881214!3d29.4106295464356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3effef8f084f3833%3A0x4fb68e2035b1fe09!2z2KLZhdmI2LLYtNqv2KfZhyDYstio2KfZhiDYotix2YXYp9mG!5e0!3m2!1sen!2suk!4v1685784500610!5m2!1sen!2suk"
          style="border: 1px solid #3c3e3f"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p class="text-center pb-0 cp" dir="ltr">
        copyright © 2023 all rights reserved, designed by
        <a href="#">AliVazife</a>.
      </p>
    </div>
  </div>
</section>
</footer>
`
class Footer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

export { Footer }