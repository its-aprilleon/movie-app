const arrow = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) => {
  let clickcounter = 0;
  let itemnumber = movielist[i].querySelectorAll("img").length;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickcounter++;
    if (itemnumber - (4 + clickcounter) + (5 - ratio) >= 0) {
      movielist[i].style.transform = `translateX(${
        movielist[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[i].style.transform = "translateX(0)";
      clickcounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.menu-list,.toggle,.profile-text-container"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
