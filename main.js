

// ==============================================================
// === Old Javascript slideshow function, supplanted by bootstrap
// ==============================================================

// let slideIndex = 0;
// showSlides();
// // slideshow controls
// function plusSlide(n){
//     showSlides(slideIndex + n);
//   }
  
//   function currentSlide(n){
//     showSlides(slideIndex = n);
//   }
// // Runs a slideshow using all images with the 'slide' class
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }

//   slideIndex++;

//   if (slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   if (n > slides.length){
//       slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
  
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 7000);

// }
