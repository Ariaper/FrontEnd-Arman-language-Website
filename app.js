import { Header } from "./components/Header/header.js";
import { Footer } from "./components/Footer/footer.js";
import { MainHomePage } from "./components/MainHomePage/main.js";

window.customElements.define("site-header", Header)
window.customElements.define("site-footer", Footer)
window.customElements.define("site-main", MainHomePage)