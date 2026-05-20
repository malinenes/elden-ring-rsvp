
let runeCount = 2;

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goYes() {
  runeCount = Math.min(runeCount + 1, 30);

  const fill= document.getElementById("rune-fill");
  const count=document.getElementById("rune-count");

  fill.style.width = Math.round((runeCount/30)*100)+'%';
  count.textContent=runeCount + '/30';

  showScreen("screen-yes");
}

function goNo() {
  const overlay = document.getElementById("fade-overlay");
  overlay.classList.add("active");

  setTimeout(() => {
    showScreen("screen-no");
    overlay.classList.remove("active");
  }, 800);
}

function goMaybe() {
  showScreen("screen-maybe");
}

function goBack() {
  showScreen("screen-main");
}
