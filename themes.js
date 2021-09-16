let slider = document.querySelector("input");
let title = document.querySelector("h1");
let sections = document.getElementsByTagName("section");
let calcScreen = sections[1];
let buttons = sections[2];
let keys = document.getElementsByTagName("button");
let blue = document.getElementsByClassName("blue");
let red = document.querySelector(".red");
let r = document.querySelector(":root");
let rs = getComputedStyle(r);

slider.oninput = function() {
  for (let n = 0; n < keys.length; n++) {
    keys[n].addEventListener("mousedown", function() {
      keys[n].style.transform = "translateY(0.25rem)";
      keys[n].style.boxShadow = "none";
    });
  }
  if (this.value <= 3) {
    title.innerHTML = "calc";
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    document.body.style.color = "hsl(0, 0%, 100%)";
    slider.style.backgroundColor = "hsl(223, 31%, 20%)";
    r.style.setProperty("--thumbColor", "hsl(6, 63%, 50%)");
    calcScreen.style.backgroundColor = "hsl(224, 36%, 15%)";
    buttons.style.backgroundColor = "hsl(223, 31%, 20%)";
    buttons.style.color = "hsl(221, 14%, 31%)";
    for (let v = 0; v < keys.length; v++) {
      keys[v].style.backgroundColor = "hsl(30, 25%, 89%)";
      keys[v].style.boxShadow = "0 0.25rem hsl(28, 16%, 65%)";
      keys[v].addEventListener("mouseup", function () {
        keys[v].style.transform = "translateY(0rem)";
        keys[v].style.boxShadow = "0 0.25rem hsl(28, 16%, 65%)";
      });
    }
    for (let i = 0; i < blue.length; i++) {
      blue[i].style.color = "hsl(0, 0%, 100%)";
      blue[i].style.backgroundColor = "hsl(225, 21%, 49%)";
      blue[i].style.boxShadow = "0 0.25rem hsl(224, 28%, 35%)";
      blue[i].addEventListener("mouseup", function () {
        blue[i].style.transform = "translateY(0rem)";
        blue[i].style.boxShadow = "0 0.25rem hsl(224, 28%, 35%)";
      });
    }
    red.style.color = "hsl(0, 0%, 100%)";
    red.style.backgroundColor = "hsl(6, 63%, 50%)";
    red.style.boxShadow = "0 0.25rem hsl(6, 70%, 34%)";
    red.addEventListener("mouseup", function () {
      red.style.transform = "translateY(0rem)";
      red.style.boxShadow = "0 0.25rem hsl(6, 70%, 34%)";
    });
  }
  if (this.value >= 47 && this.value <= 53) {
    title.innerHTML = "calc";
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.body.style.color = "hsl(60, 10%, 19%)";
    slider.style.backgroundColor = "hsl(0, 5%, 81%)";
    r.style.setProperty("--thumbColor", "hsl(25, 98%, 40%)");
    calcScreen.style.backgroundColor = "hsl(0, 0%, 93%)";
    buttons.style.backgroundColor = "hsl(0, 5%, 81%)";
    buttons.style.color = "hsl(60, 10%, 19%)";
    for (let v = 0; v < keys.length; v++) {
      keys[v].style.backgroundColor = "hsl(45, 7%, 89%)";
      keys[v].style.boxShadow = "0 0.25rem hsl(35, 11%, 61%)";
      keys[v].addEventListener("mouseup", function () {
        keys[v].style.transform = "translateY(0rem)";
        keys[v].style.boxShadow = "0 0.25rem hsl(35, 11%, 61%)";
      });
    }
    for (let i = 0; i < blue.length; i++) {
      blue[i].style.color = "hsl(0, 0%, 100%)";
      blue[i].style.backgroundColor = "hsl(185, 42%, 37%)";
      blue[i].style.boxShadow = "0 0.25rem hsl(185, 58%, 25%)";
      blue[i].addEventListener("mouseup", function () {
        blue[i].style.transform = "translateY(0rem)";
        blue[i].style.boxShadow = "0 0.25rem hsl(185, 58%, 25%)";
      });
    }
    red.style.color = "hsl(0, 0%, 100%)";
    red.style.backgroundColor = "hsl(25, 98%, 40%)";
    red.style.boxShadow = "0 0.25rem hsl(25, 99%, 27%)";
    red.addEventListener("mouseup", function () {
      red.style.transform = "translateY(0rem)";
      red.style.boxShadow = "0 0.25rem hsl(25, 99%, 27%)";
    });
  }
  if (this.value >= 97) {
    title.innerHTML = "calc";
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.body.style.color = "hsl(52, 100%, 62%)";
    slider.style.backgroundColor = "hsl(268, 71%, 12%)";
    r.style.setProperty("--thumbColor", "hsl(176, 100%, 44%)");
    calcScreen.style.backgroundColor = "hsl(268, 71%, 12%)";
    buttons.style.backgroundColor = "hsl(268, 71%, 12%)";
    buttons.style.color = "hsl(52, 100%, 62%)";
    for (let v = 0; v < keys.length; v++) {
      keys[v].style.backgroundColor = "hsl(268, 47%, 21%)";
      keys[v].style.boxShadow = "0 0.25rem hsl(290, 70%, 36%)";
      keys[v].addEventListener("mouseup", function () {
        keys[v].style.transform = "translateY(0rem)";
        keys[v].style.boxShadow = "0 0.25rem hsl(290, 70%, 36%)";
      });
    }
    for (let i = 0; i < blue.length; i++) {
      blue[i].style.color = "hsl(0, 0%, 100%)";
      blue[i].style.backgroundColor = "hsl(281, 89%, 26%)";
      blue[i].style.boxShadow = "0 0.25rem hsl(285, 91%, 52%)";
      blue[i].addEventListener("mouseup", function () {
        blue[i].style.transform = "translateY(0rem)";
        blue[i].style.boxShadow = "0 0.25rem hsl(285, 91%, 52%)";
      });
    }
    red.style.color = "hsl(198, 20%, 13%)";
    red.style.backgroundColor = "hsl(176, 100%, 44%)";
    red.style.boxShadow = "0 0.25rem hsl(177, 92%, 70%)";
    red.addEventListener("mouseup", function () {
      red.style.transform = "translateY(0rem)";
      red.style.boxShadow = "0 0.25rem hsl(177, 92%, 70%)";
    });
  }
}
