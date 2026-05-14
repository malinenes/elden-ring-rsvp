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
  showScreen("screen-no");
}

function goMaybe() {
  showScreen("screen-maybe");
}

function goBack() {
  showScreen("screen-main");
}

document.querySelectorAll(".er-btn").forEach((btn) => {
  console.log("fann knapp:", btn);
});
