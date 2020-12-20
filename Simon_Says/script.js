const btnStart = document.getElementById("btnEmpezar");
const levelUp = document.getElementById("level");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const FINAL_LEVEL = 10;

class Game {
  constructor() {
    this.startGame();
    this.createSequence();
    setTimeout(() => this.nextLevel(), 500);
  }

  startGame() {
    this.btnStartGame();
    this.gameValidation = this.gameValidation.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.turnOnSequence = this.turnOnSequence.bind(this);
    this.level = 1;
    this.colors = {
      blue,
      red,
      yellow,
      green,
    };
  }

  btnStartGame() {
    if (btnEmpezar.classList.contains("hide")) {
      btnEmpezar.classList.remove("hide");
    } else {
      btnEmpezar.classList.add("hide");
    }
  }

  createSequence() {
    this.sequence = new Array(FINAL_LEVEL)
      .fill(1)
      .map(() => Math.floor(Math.random() * 4));
  }

  nextLevel() {
    levelUp.innerHTML = `Level: ${this.level}`;
    this.subLevel = 0;
    this.turnOnSequence();
    this.addEvents();
  }

  turnOnSequence() {
    for (var i = 0; i < this.level; i++) {
      let color = this.changeNumberToColor(this.sequence[i]);
      setTimeout(() => this.turnOnColor(color), 1000 * i);
    }
  }

  changeNumberToColor(number) {
    switch (number) {
      case 0:
        return "blue";
      case 1:
        return "red";
      case 2:
        return "yellow";
      case 3:
        return "green";
    }
  }

  changeColorToNumber(color) {
    switch (color) {
      case "blue":
        return 0;
      case "red":
        return 1;
      case "yellow":
        return 2;
      case "green":
        return 3;
    }
  }

  turnOnColor(color) {
    this.colors[color].classList.add("light");
    setTimeout(() => this.colors[color].classList.remove("light"), 350);
  }

  addEvents() {
    this.colors.blue.addEventListener("click", this.gameValidation);
    this.colors.red.addEventListener("click", this.gameValidation);
    this.colors.yellow.addEventListener("click", this.gameValidation);
    this.colors.green.addEventListener("click", this.gameValidation);
  }

  removeEvents() {
    this.colors.blue.removeEventListener("click", this.gameValidation);
    this.colors.red.removeEventListener("click", this.gameValidation);
    this.colors.yellow.removeEventListener("click", this.gameValidation);
    this.colors.green.removeEventListener("click", this.gameValidation);
  }

  gameValidation(event) {
    const selectedColor = event.srcElement.id;
    const selectedNumber = this.changeColorToNumber(selectedColor);
    this.turnOnColor(selectedColor);
    if (selectedNumber === this.sequence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        this.removeEvents;
        if (this.level === FINAL_LEVEL + 1) {
          this.youWon();
        } else {
          setTimeout(this.nextLevel, 2000);
        }
      }
    } else {
      this.youLost();
    }
  }

  youWon() {
    swal({
      title: "Simon Says",
      text: "Congratulations, You Won",
      icon: "success",
      button: "Play Again",
    }).then(() => this.startGame(), this.removeEvents());
  }

  youLost() {
    swal({
      title: "Simon Says",
      text: "Sorry, you lost",
      icon: "error",
      button: "Try Again",
    }).then(() => this.startGame(), this.removeEvents());
  }
}

function empezarJuego() {
  game = new Game();
}
