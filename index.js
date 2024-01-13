const arrow = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) => {
  let clickcounter = 0;
  let itemnumber = movielist[i].querySelectorAll("img").length;

  arrow.addEventListener("click", () => {
    clickcounter++;
    if (itemnumber - (4 + clickcounter) >= 0) {
      movielist[i].style.transform = `translateX(${
        movielist[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielist[i].style.transform = "translateX(0)";
      clickcounter = 0;
    }
  });
});
