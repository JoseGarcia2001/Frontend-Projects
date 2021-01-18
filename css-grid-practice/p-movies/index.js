// Inserción de películas

function insertMovies(element, nMovies) {
  element.forEach((e) => {
    for (let index = 0; index < nMovies; index++) {
      e.insertAdjacentHTML(
        "beforeend",
        `
          <div class="movie-card">
            <div class="movie-card__overlay  animate__animated animate__fadeIn">
              <h3>The Night</h3>
              <p>Quam tempus lobortis purus quisque cum natoque tempus. Mauris turpis
              sociis bibendum ultricies platea cras tellus. Eu, a tincidunt aliquet
              orci urna, faucibus etiam nunc integer.</p>
              <div class="overlay-buttons">
                <img src="./assets/play.png" alt="Play">
                <img src="./assets/ant-design_plus-circle-filled.png" alt="Más">
                <img src="./assets/danger.png" alt="Info">
            </div>
            </div>
              <img class="card-image" src="./assets/movie.jpg" alt="Cover de la película" />
              <p class="card-description">The Night</p>
            </div>
        `
      );
    }
  });
}

const $moviesContainer = document.querySelectorAll(".movies__container");
insertMovies($moviesContainer, 15);

// Acciones del desarrollo móvil.

const infoMessage = `
        <div class="movie-message animate__animated animate__bounceIn">
          <span class="info personal"></span>
          <h3>Oops!</h3>
          <p>
          Hola! Soy Jose Garcia, el diseñador y maquetador de esta Web.<br /> <br />
          Este es un sitio estático. Fué creado con fines educativos, sin embargo
          ¡gracias por visitarlo!<br />
          <br />
          Si quieres saber un poco más de mi, mis proyectos o contactarme. Visita
          mis redes sociales o bien, el repositorio del proyecto para ver el código. 😄
        </p>
        <div class="images-container .media">
          <a href="https://www.linkedin.com/in/jose-gg/" target="_blank">
            <img src="./assets/brandico_linkedin-rect.png" alt="Play" />
          </a>
          <a href="https://twitter.com/Joga_Dev" target="_blank">
            <img src="./assets/ant-design_twitter-circle-filled.png" alt="Más" />
          </a>
          <a href="https://github.com/JoseGarcia2001/Frontend-Projects/tree/main/css-grid-practice/p-movies" target="_blank">
            <img src="./assets/ant-design_github-filled.png" alt="Información" />
          </a>
        </div>
        </div>
      `;

if (document.body.clientWidth < 768) {
  const $hamburgerBtn = document.querySelector(".header__icon-menu");
  const $arrowBtn = document.querySelector(".header__profile");
  const $main = document.querySelector(".movies");
  const $movieCard = document.querySelectorAll(".movie-card");

  const $menu = document.querySelector(".header__menu");
  const $profileMenu = document.querySelector(".profile__menu");
  const $message = document.querySelector(".message-container");
  const $infoMessage = document.querySelector(".message-info__container");

  $hamburgerBtn.addEventListener("click", () => {
    if ($profileMenu.classList.contains("active-menu")) {
      $profileMenu.classList.remove("active-menu");
      $profileMenu.classList.remove("animate__animated", "animate__fadeIn");
    }

    if (
      document.querySelector(".movie-message") ||
      document.querySelector("info")
    ) {
      $message.innerHTML = "";
      $infoMessage.innerHTML = "";
    }

    $menu.classList.toggle("active-menu");
    $menu.classList.add("animate__animated", "animate__fadeIn");

    if ($menu.classList.contains("active-menu")) {
      $main.style.opacity = "0.50";
    } else {
      $main.style.removeProperty("opacity");
      $menu.classList.remove("animate__animated", "animate__fadeIn");
    }
  });

  $arrowBtn.addEventListener("click", () => {
    if ($menu.classList.contains("active-menu")) {
      $menu.classList.remove("active-menu");
      $menu.classList.remove("animate__animated", "animate__fadeIn");
    }

    if (document.querySelector(".movie-message")) {
      $message.innerHTML = "";
      $infoMessage.innerHTML = "";
    }

    $profileMenu.classList.toggle("active-menu");
    $profileMenu.classList.add("animate__animated", "animate__fadeIn");

    if ($profileMenu.classList.contains("active-menu")) {
      $main.style.opacity = "0.50";
    } else {
      $main.style.removeProperty("opacity");
      $profileMenu.classList.remove("animate__animated", "animate__fadeIn");
    }
  });

  document.addEventListener("click", (e) => {
    if (
      e.target.matches("ul li img") ||
      e.target.matches("ul li p") ||
      e.target.matches("ul li") ||
      e.target.matches("div .profile-options")
    ) {
      $infoMessage.innerHTML = infoMessage;
      $main.style.opacity = "0.5";
      const $closeWindow = document.querySelector(".info.personal");
      $closeWindow.addEventListener("click", () => {
        $infoMessage.innerHTML = "";
        $main.style.opacity = "1";
      });
      $menu.classList.remove("active-menu");
      $menu.classList.remove("animate__animated", "animate__fadeIn");
      $profileMenu.classList.remove("active-menu");
      $profileMenu.classList.remove("animate__animated", "animate__fadeIn");
      $main.style.removeProperty("opacity");
    }
  });

  $movieCard.forEach((e) => {
    e.addEventListener("click", (e) => {
      if (document.querySelector(".movie-message")) {
        $message.innerHTML = "";
        $main.style.opacity = "1";
      } else {
        $message.innerHTML = `<div class="movie-message animate__animated animate__bounceIn">
          <span class="info" ></span>
          <h3>The Night</h3>
          <p>
            Quam tempus lobortis purus quisque cum natoque tempus. Mauris turpis
            sociis bibendum ultricies platea cras tellus. Eu, a tincidunt aliquet
            orci urna, faucibus etiam nunc integer.
          </p>
          <div class="images-container">
          <img class="movie-message__icon" src="./assets/play.png" alt="Play" />
          <img class="movie-message__icon" src="./assets/ant-design_plus-circle-filled.png" alt="Más" />
          <img class="movie-message__icon" src="./assets/danger.png" alt="Información" />
          </div
        </div>`;

        const $closeWindow = document.querySelector(".info");
        $closeWindow.addEventListener("click", () => {
          $message.innerHTML = "";
          $main.style.opacity = "1";
        });

        $main.style.opacity = "0.50";

        const $movieIcons = document.querySelectorAll(".movie-message__icon");
        $movieIcons.forEach((e) => {
          e.addEventListener("click", () => {
            if (document.querySelector(".movie-message")) {
              $message.innerHTML = "";
            }
            $infoMessage.innerHTML = infoMessage;
            $main.style.opacity = "1";

            const $closeWindow = document.querySelector(".info.personal");
            $closeWindow.addEventListener("click", () => {
              $infoMessage.innerHTML = "";
              $main.style.opacity = "1";
            });
          });
        });

        if (
          $profileMenu.classList.contains("active-menu") ||
          $menu.classList.contains("active-menu")
        ) {
          $profileMenu.classList.remove("active-menu");
          $menu.classList.remove("active-menu");
          $profileMenu.classList.remove("animate__animated", "animate__fadeIn");
          $menu.classList.remove("animate__animated", "animate__fadeIn");
          $main.style.removeProperty("opacity");
        }
      }
    });
  });
} else {
  function openMessage(arrayOfElements) {
    const $infoMessage = document.querySelector(".message-info__container");

    arrayOfElements.forEach((e) => {
      e.addEventListener("click", () => {
        $infoMessage.innerHTML = infoMessage;
        const $closeWindow = document.querySelector(".info.personal");
        $closeWindow.addEventListener("click", () => {
          $infoMessage.innerHTML = "";
        });
      });
    });
  }

  const $movieCard_Overlay = document.querySelectorAll(
    ".movie-card__overlay img"
  );
  openMessage($movieCard_Overlay);

  const $asideButtons = document.querySelectorAll(".nav-item");
  openMessage($asideButtons);

  const $headerButtons = document.querySelectorAll(".profile-options img");
  openMessage($headerButtons);
}
