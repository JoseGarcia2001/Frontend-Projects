// Menú Hamburguesa

const $hamburgerBtn = document.querySelector(".header__icon-menu");

$hamburgerBtn.addEventListener("click", () => {
  const $menu = document.querySelector(".header__menu");
  $menu.classList.toggle("active-menu");

  if ($menu.classList.contains("active-menu")) {
    const $body = document.querySelector(".movies");
    // $body.style.background = "rgba(255, 86, 93, 0.40)";
    $body.style.opacity = "0.50";
  } else {
    const $body = document.querySelector(".movies");
    // $body.style.removeProperty("background");
    $body.style.removeProperty("opacity");
  }
});
