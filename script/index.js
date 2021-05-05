$(document).ready(function() {
    $('.header-burger').click(function() {
      $('.header-burger, .header-menu, .header-span').toggleClass('active');
      $('body').toggleClass('lock');
    })
  });

const nextBtn = document.getElementById("sliderNext");
const previousBtn = document.getElementById("sliderPrev");
const imgBtn = [...document.querySelectorAll(".carousel-dot-item")];
const slides = [...document.querySelectorAll(".carousel-item")];
const dot = document.getElementById("dot")
const img = document.getElementById("carousel")
let currentSlide = 0;

nextBtn.addEventListener("click", goNextSlide);
previousBtn.addEventListener("click", goPreviousSlide);
imgBtn.forEach(elem => elem.addEventListener("click", toggleSlide));

setInterval(goNextSlide, 5000)

function goNextSlide() {
    if (currentSlide >= slides.length-1){
        currentSlide = 0;
    } else{
        currentSlide++
    }
    showSlide();
    slideUp();
}

function goPreviousSlide() {
    if (currentSlide === 0){
        currentSlide = slides.length-1;
    } else{
        currentSlide--
    }
    showSlide();
    slideUp();
}

function toggleSlide(e) {
    e.target.closest("ul").querySelector(".active").classList.remove("active");
    e.target.closest("li").classList.add("active");
    currentSlide = imgBtn.findIndex(elem => elem.classList.contains("active"));
    showSlide()
}

function showSlide() {
    slides.forEach(elem => elem.classList.add("hidden"));
    slides[currentSlide].classList.remove("hidden");
}

function slideUp() {
    document.querySelector(".carousel-dot-item.active").classList.remove('active');
    imgBtn[currentSlide].classList.add('active');
}