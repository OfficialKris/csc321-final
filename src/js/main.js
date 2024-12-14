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

let navbar = document.querySelector('#app_navbar')
if (navbar != null) 
    navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="/#">
        <img src="/cosmic.webp" alt="Bootstrap" width="35" height="35">
        Space Corp.
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a id="page_home" class="page_item nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a id="page_about_us" class="page_item nav-link" href="/about_us">About Us</a>
        </li>
        <li class="nav-item">
        <a id="page_products" class="page_item nav-link" href="/about_products">Products</a>
        </li>
        </ul>
    </div>
    </div>
</nav>
`

let carousel = document.querySelector('#app_carousel') 
if (carousel != null)
    carousel.innerHTML = `
  <!-- TODO: Testimonials -->
  <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="12000">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style="height: 14em;">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <div class="container">
          <div class="carousel-caption text-start">
            <p class="opacity-75"><i>"Space Corp has been a game-changer for our satellite deployment needs. Their reliable launch services and impeccable attention to detail ensured our mission was a success. We couldn’t ask for a better partner in reaching orbit!"</i></p>
            <h4><b>– Emily Chen, CEO, Orbital Analytics</b></h4>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="height: 14em">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <div class="container">
          <div class="carousel-caption">
            <p class="opacity-75"><i>"From start to finish, Space Corp delivered excellence. Their team made the process seamless, and our satellite was launched on schedule with zero complications. They’re the gold standard in the industry!"</i></p>
            <h4><b>– Raj Patel, CTO, Stellar Networks</b></h4>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="height: 14em">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          preserveAspectRatio="xMidYMid slice" focusable="false">
          <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
        </svg>
        <div class="container">
          <div class="carousel-caption text-end">
            <p class="opacity-75"><i>"Working with Space Corp has been an incredible experience. Their cutting-edge technology and customer-centric approach gave us complete confidence in our launch. We look forward to partnering with them for future missions."</i></p>
            <h4><b>– Sofia Alvarez, Director of Space Systems, NovaSat</b></h4>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `
let footer = document.querySelector('#app_footer')
if (footer != null) 
    footer.innerHTML = `
  <!-- Footer: Site Nav -->
  <div class="container">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-3">
      <div class="col mb-3">
        <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
          <!-- <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg> -->
          
        </a>
        <!-- <p class="text-body-secondary">&copy; 2024</p> -->
        <!-- <p class="text-body-secondary">Site Navigator</p> -->
      </div>

      <div class="col mb-3">

      </div>

      <div class="col mb-3"> </div>
      <div class="col mb-3"> </div>

      <div class="col mb-3">
        <h5>Site Nav</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="/about_us#" class="nav-link p-0 text-body-secondary">About Us</a></li>
          <li class="nav-item mb-2"><a href="/about_products#" class="nav-link p-0 text-body-secondary">Our Products</a></li>
        </ul>
      </div>
    </footer>
  </div>
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

