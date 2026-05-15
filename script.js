function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goYes() {
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
