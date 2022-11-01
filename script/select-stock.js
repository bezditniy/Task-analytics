
const stockContainer = document.querySelectorAll(".stock-container");


for (let i = 0; i < stockContainer.length; i++) {

stockContainer[i].addEventListener('click', function() {
  if (document.querySelector(".stock-container.stock-active")) {
    document.querySelector(".stock-container.stock-active").classList.remove("stock-active")
    stockContainer[i].classList.add("stock-active");
  } else {
    stockContainer[i].classList.add("stock-active");

  }
});

}