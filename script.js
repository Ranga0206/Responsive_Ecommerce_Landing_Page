const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

bar.addEventListener("click", function () {
  navbar.style.right = "0px";
});

close.addEventListener("click", () => {
  navbar.style.right = "-300px";
});
