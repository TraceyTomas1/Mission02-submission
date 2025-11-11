const images = [
  {
    src: "images/understandingcarelabels.jpg",
    description:
      "Care Labels can be found on the inner left hand side of your garment",
  },
  {
    src: "images/woolenscare.png",
    description: "Woolens",
  },
  {
    src: "images/wovenscare.png",
    description: "Wovens",
  },
  {
    src: "images/outerwearcare.jpg",
    description: "Outerwear",
  },
  {
    src: "images/denimcare.png",
    description: "Denim",
  },
];

// set to images.length - 1, so 0 is the first image selected when right button is clicked
let currentIndex = images.length - 1;

// get elements by id for selected-Image, image-name, left-arrow and right arrow
// get elements by query selector all for .thumbnail
const selectedImage = document.getElementById("selected-image"); //element
const imageDescription = document.getElementById("image-description");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
//                 selecting all elements in HTML with the class="thumbnail"
const thumbnails = document.querySelectorAll(".thumbnail"); //[element, element, element]

// to update the selected image and the displayed image name✨✨
function updateGallery() {
  selectedImage.src = images[currentIndex].src;
  imageDescription.innerText = images[currentIndex].description;
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
// if at beginning of gallery, change to end
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

// ADDING FUNCTIONS to elements by adding event listeners or directly in the html
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    selectThumbnail(index);
  }); //function() SAME AS () =>
}); //👍
