const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const list = [
  {
    id: 1,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/15-slider/setup/img-1.jpeg?raw=true",
  },
  {
    id: 2,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/15-slider/setup/img-2.jpeg?raw=true",
  },
  {
    id: 3,
    img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/15-slider/setup/person-1.jpeg?raw=true",
  },
];

let index = 0;
let counter;

window.addEventListener("DOMContentLoaded", function () {
  counter = 0;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${counter * 100}%`;
    counter++;
  }
});

// function createSlider(arg) {
//   list.map(function (item) {
//     const slide = document.createElement("div");
//     slide.classList.add(".slide");
//     slide.innerHTML = `<img
//     src="${item.img}"
//     alt="slider image"
//   />
//   <p>${item.id}</p>`;
//   });
// }
// createSlider(slides);

function slide() {
  slides.forEach(function (item) {
    item.style.transform = `translateX(-${index * 100}%)`;
  });
}

nextBtn.addEventListener("click", function () {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  slide();
});

prevBtn.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  slide();
});
// console.log(index);
