import '../scss/styles.scss'

// Import all of Bootstrap's JS
// TODO: optimize
import * as bootstrap from 'bootstrap'

// Helper function
let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
});

document.querySelector('#app_navbar').innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="/vite.svg" alt="Bootstrap" width="30" height="24">
        Corporate Landing
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a id="page_about_us" class="page_item nav-link" href="/about_us">About Us</a>
        </li>
        <li class="nav-item">
            <a id="page_products" class="page_item nav-link" href="/about_products">Products</a>
        </li>
        <li class="nav-item">
            <a id="page_home" class="page_item nav-link" href="/">Home</a>
        </li>
        </ul>
    </div>
    </div>
</nav>
`
// active should have aria-current="page" 
export function setupCounter() {
    let w = window.location.pathname
    console.log(w)
    let questions = document.getElementsByClassName("page_item")
    for (let x = 0; x < questions.length; x++) {
        if (w == "/" && questions[x].id == "page_home"
            || w == "/about_us" && questions[x].id == "page_about_us"
            || w == "/about_products" && questions[x].id == "page_products"
            || w == "/product" && questions[x].id == "page_products"
        ) {
            console.log(questions[x].id)
            questions[x].classList.add("active")
        } else {
            questions[x].classList.toggle("active", questions[x].classList.contains("active"))

        }
    }
}

setupCounter()

