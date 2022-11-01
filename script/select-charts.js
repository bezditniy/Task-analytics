const chartsContainer = document.querySelectorAll(".duration");


for (let i = 0; i < chartsContainer.length; i++) {

chartsContainer[i].addEventListener('click', function() {
  if (document.querySelector(".duration.actived")) {
    document.querySelector(".duration.actived").classList.remove("actived")
    chartsContainer[i].classList.add("actived");
  } else {
    chartsContainer[i].classList.add("actived");

  }
});

}