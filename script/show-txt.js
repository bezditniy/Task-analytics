const description = document.querySelector(".description");

const btn = document.querySelector(".show-btn");

btn.addEventListener('click', function handleClick() {
  if (document.querySelector(".description.active")) {
    description.classList.remove("active");

    btn.innerHTML = 'Show Less';
  } else {
    description.classList.add("active");

    btn.innerHTML = 'Show More';
  }
});