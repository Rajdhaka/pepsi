const colors = ["#0062be", "#e60c2c", "#1e1e1e"];
const section = document.querySelector(".sec");
const images = document.querySelectorAll(".pep");
const pepsi = document.querySelector(".pepsi");
const socialLogo = document.querySelectorAll(".img");
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  img.addEventListener("click", () => {
    section.style.backgroundColor = colors[i];
    const src = img.src;
    pepsi.src = src;
    // for (let logo of socialLogo) {
    //   logo.style.backgroundColor.color = colors[i];
    // }
  });
}
