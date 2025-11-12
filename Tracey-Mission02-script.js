const images = [
  {
    title: "CARE LABELS",
    src: "images/understandingcarelabels.jpg",
    description: `1/5 
      Care Labels can be found on the inner left hand side of your garment.`,
  },
  {
    title: "WOOLENS",
    src: "images/woolenscare.png",
    description: `2/5 
    Gentle washing and drying tips for wool garments.`,
  },
  {
    title: "WOVENS",
    src: "images/wovenscare.png",
    description: `3/5 
    Key steps for cleaning various woven fabrics.`,
  },
  {
    title: "OUTERWEAR",
    src: "images/outerwearcare.jpg",
    description: `4/5 
    Maintaining coats, jackets, and other outer layers.`,
  },
  {
    title: "DENIM",
    src: "images/denimcare.png",
    description: `5/5 
    Extend life of jeans with these simple tips.`,
  },
];

// set to images.length - 1, so 0 is the first image selected when right button is clicked
let currentIndex = images.length - 1;

const imageTitle = document.getElementById("image-title"); // get elements by id
const selectedImage = document.getElementById("selected-image");
const imageDescription = document.getElementById("image-description");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const thumbnails = document.querySelectorAll(".thumbnail"); //get elements by query selector all for .thumbnail [element, element, element]

// to update the selected image and the displayed image name✨
function updateGallery() {
  imageTitle.innerText = images[currentIndex].title;
  selectedImage.src = images[currentIndex].src;
  imageDescription.innerText = images[currentIndex].description;
}

// to change current index to the next one
function nextImage() {
  console.log("next image clicked");
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0; // if at end of gallery, start from beginning again
  }
  console.log(currentIndex);
  updateGallery(); //call update gallery✨
}

// to change current index to the previous one
function prevImage() {
  console.log("previous image clicked");
  if (currentIndex === -1) {
    currentIndex = images.length - 1; // if at beginning of gallery, change to end
  }
  console.log(currentIndex);
  updateGallery(); //call update gallery✨
  currentIndex--;
}

// change current index to selected thumbnail index 👍
function selectThumbnail(index) {
  currentIndex = index;
  updateGallery(); //call update gallery
}

// ADDING FUNCTIONS TO ELEMENTS WITH EVENT LISTENERS
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    selectThumbnail(index); //call select thumbnail👍
  });
});
