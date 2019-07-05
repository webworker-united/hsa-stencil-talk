const img = document.createElement("img");
img.src =
  "https://webworker.com/wp-content/themes/webworker/assets/images/logos/ww-signet.png";
img.alt = "webworker logo";
img.classList = "ww-branding";
img.addEventListener("click", () =>
  window.open("https://webworker.com", "_blank")
);
document.querySelector("body").appendChild(img);
