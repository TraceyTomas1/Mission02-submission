const images = [
  {
    src: "images/suit.webp",
    name: "Flawless fit and exceptional craftsmanship, my go-to tailor! -Anne",
  },
  {
    src: "images/cutting.jpg",
    name: "Quick turnaround and perfect detailing every time! -Brad",
  },
  {
    src: "images/measuring.jpg",
    name: "Transformed my wardrobe with precision and style! -Callum",
  },
  {
    src: "images/mannequin.jpg",
    name: "Outstanding service and tailoring that truly elevates your look -Deborah",
  },
  {
    src: "images/sewing.jpg",
    name: "Meticulous measurements, superb finish—worth every penny! -Emma",
  },
];

let currentIndex = 0;

// get elements by id for selected-Image, image-name, left-arrow and right arrow
// get elements by query selector all for .thumbnail
const selectedImage = document.getElementById("selected-image"); //element
const imageName = document.getElementById("image-name");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
//                 selecting all elements in HTML with the class="thumbnail"
const thumbnails = document.querySelectorAll(".thumbnail"); //[element, element, element]

// to update the selected image and the displayed image name✨✨
function updateGallery() {
  selectedImage.src = images[currentIndex].src;
  imageName.innerText = images[currentIndex].name;
}

// to change current index to the next one
// if at end of gallery, start from begining again
// call update gallery
function nextImage() {
  console.log("next image clicked");
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  console.log(currentIndex);
  updateGallery(); //✨✨ selectedImage.src = images[currentIndex].src  imageName.innerText = images[currentIndex].name
}

// to change current index to the previous one
// if at begining of gallery, change to end
// call update gallery
function prevImage() {
  console.log("previous image clicked");
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = images.length - 1;
  }
  console.log(currentIndex);
  updateGallery(); //✨✨ selectedImage.src = images[currentIndex].src  imageName.innerText = images[currentIndex].name
}

// change current index to selected thumbnail index
// call updateGallery
function selectThumbnail(index) {
  currentIndex = index;
  updateGallery(); //👍
}

// add functions to elements by adding event listeners or directly in the html
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    selectThumbnail(index);
  }); //function() SAME AS () =>
}); //👍

// OVERLAY
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
