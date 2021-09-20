const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// slides.forEach(function (item) {
//   console.log(item);
// });

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  console.log(counter);
});
