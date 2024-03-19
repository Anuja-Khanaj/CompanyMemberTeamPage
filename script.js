const about = document.getElementById("about");
about.addEventListener("click", changeAbout)
function changeAbout() {
  let info = document.getElementById("info");
  info.innerHTML = `
  <div class="card-row">
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>John Doe</h3>
          <p>Software Engineer</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>Jane Smith</h3>
          <p>Data Scientist</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>Michael Johnson</h3>
          <p>Web Developer</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
</div>
<div class="card-row">
  <div class="card" >
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>Sarah Brown</h3>
          <p>UI/UX Designer</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>David Wilson</h3>
          <p>Project Manager</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>

</div>
`;
  console.log("clicked");
}

let gallery = document.getElementById("gallery");
gallery.addEventListener("click", changeGallery);
function changeGallery() {
  let info = document.getElementById("info");
  info.innerHTML = `
  <div class="card-row">
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>Emily Watson</h3>
          <p>Sales Manager</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>Mark Thompson</h3>
          <p>Marketing Director</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
  <div class="card">
  <img src="./img/images.jpeg" alt="">
  <div class="text">
      <h3>Amy Garcia</h3>
      <p>Marketing Specialist</p>
      <div class="social-media">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
      </div>
  </div>
</div>
</div>
`;
  console.log("clicked");
}
let home = document.getElementById("home");
home.addEventListener("click", changetoHome);

function changetoHome() {
  let info = document.getElementById("info");
  info.innerHTML = `<div class="card-row">
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>Thomas Anderson</h3>
          <p>Operations Manager</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
  <div class="card">
      <img src="./img/images.jpeg" alt="">
      <div class="text">
          <h3>Olivia Williams</h3>
          <p>Finance Director</p>
          <div class="social-media">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>
  </div>
  <div class="card">
  <img src="./img/images.jpeg" alt="">
  <div class="text">
      <h3>Emily Clark</h3>
      <p>HR Manager</p>
      <div class="social-media">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
      </div>
  </div>
</div>

</div>

 `;
}
