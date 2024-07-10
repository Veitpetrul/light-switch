let dark = false;

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  dark = !dark;

  document.body.classList.toggle("body--dark", !dark);

  btn.classList.toggle("button-dark", !dark);

  if (!dark) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
