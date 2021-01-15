// Menú Hamburguesa

const $hamburgerBtn = document.querySelector(".header__icon-menu");
const $arrowBtn = document.querySelector(".profile-arrow");
const $body = document.querySelector(".movies");

const $menu = document.querySelector(".header__menu");
const $profileMenu = document.querySelector(".profile__menu");

$hamburgerBtn.addEventListener("click", () => {
  if ($profileMenu.classList.contains("active-menu")) {
    $profileMenu.classList.remove("active-menu");
  }

  $menu.classList.toggle("active-menu");

  if ($menu.classList.contains("active-menu")) {
    $body.style.opacity = "0.50";
  } else {
    $body.style.removeProperty("opacity");
  }
});

$arrowBtn.addEventListener("click", () => {
  if ($menu.classList.contains("active-menu")) {
    $menu.classList.remove("active-menu");
  }

  $profileMenu.classList.toggle("active-menu");

  if ($profileMenu.classList.contains("active-menu")) {
    $body.style.opacity = "0.50";
  } else {
    $body.style.removeProperty("opacity");
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target.matches("ul li img") ||
    e.target.matches("ul li p") ||
    e.target.matches("ul li")
  ) {
    $menu.classList.remove("active-menu");
    $profileMenu.classList.remove("active-menu");
    $body.style.removeProperty("opacity");
    document.innerHTML = `<div class="movie-message">
      <h3>The Night</h3>
      <p>
        Quam tempus lobortis purus quisque cum natoque tempus. Mauris turpis
        sociis bibendum ultricies platea cras tellus. Eu, a tincidunt aliquet
        orci urna, faucibus etiam nunc integer.
      </p>
      <img src="./assets/play.png" alt="Play" />
      <img src="./assets/ant-design_plus-circle-filled.png" alt="Más" />
      <img src="./assets/danger.png" alt="Información" />
    </div>`;
  }
});
