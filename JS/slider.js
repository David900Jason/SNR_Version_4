// Images Array
let imgs = document.querySelectorAll(".imgs-container > .image");
let imgsArray = Array.from(imgs);
let imgsContainer = document.querySelector(".imgs-container");

// Previous and Next Button
let prevButton = document.querySelector("[data-prev]");
let nextButton = document.querySelector("[data-next]");

// Images Indicators
let bulletList = document.querySelector("ul.bullets");
createBullets(imgsArray.length);
let bullets = document.querySelectorAll("ul.bullets > li");
let bulletsArray = Array.from(bullets);

let start = 0;
let index = 1;
let end = imgsArray.length - 1;

toggleActiveClass();
imgsContainer.style.transform = `translateX(-${index * 100}%)`;

// Prev Button
prevButton.onclick = function () {
  if (this.classList.contains("disabled")) {
    return false;
  } else {
    index -= 1;
    toggleDisabledClass(this, nextButton, start);
    toggleActiveClass();
    imgsContainer.style.transform = `translateX(-${index * 100}%)`;
    console.log(index);
  }
};

// Next Button
nextButton.onclick = function () {
  if (this.classList.contains("disabled")) {
    return false;
  } else {
    index += 1;
    toggleDisabledClass(this, prevButton, end);
    toggleActiveClass();
    imgsContainer.style.transform = `translateX(-${index * 100}%)`;
    console.log(index);
  }
};

// Function Create Bullets According to Number of Imgs
function createBullets(number) {
  for (let i = 0; i < number; i++) {
    let li = document.createElement("li");
    li.dataset.index = i;
    bulletList.appendChild(li);
  }
}

// Function Toggle Active Class
function toggleActiveClass() {
  // Images Index Change
  bulletsArray.forEach((bullet) => {
    // Remove
    bullet.classList.remove("active");
    // Add
    if (bullet.dataset.index == index) {
      bullet.classList.add("active");
    }
  });
}

// Function Toggle Class Disabled
function toggleDisabledClass(curr, secondButton, ind) {
  if (index == ind) {
    curr.classList.add("disabled");
  }
  if (index > start && index < end) {
    curr.classList.remove("disabled");
    secondButton.classList.remove("disabled");
  }
}
