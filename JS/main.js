/*
  Counter
*/

const clientsDiv = document.querySelector("span[data-clients]");
const projectsDiv = document.querySelector("span[data-projects]");
const servicesDiv = document.querySelector("span[data-services]");
const partnersDiv = document.querySelector("span[data-partners]");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

// Clients
let clients = setInterval(function () {
  count1++;
  if (count1 == 1000) {
    clearInterval(clients);
  }
  clientsDiv.innerHTML = `${count1}`;
}, 10);

// Projects
let projects = setInterval(function () {
  count2++;
  if (count2 == 150) {
    clearInterval(projects);
  }
  projectsDiv.innerHTML = `${count2}`;
}, 10);

// Partners
let partners = setInterval(function () {
  count3++;
  if (count3 == 20) {
    clearInterval(partners);
  }
  partnersDiv.innerHTML = `${count3}`;
}, 10);

// Services
let services = setInterval(function () {
  count4++;
  if (count4 == 50) {
    clearInterval(services);
  }
  servicesDiv.innerHTML = `${count4}`;
}, 10);

/*
  Accordion Animation
*/

const accordionIcons = document.querySelectorAll(
  ".frequently-asked-questions .heading i"
);
const accordionPanel = document.querySelectorAll(
  ".frequently-asked-questions .panel"
);

accordionIcons.forEach((icon) => {
  // Loop On Icon
  icon.addEventListener("click", (e) => {
    // Toggle Active Class to Clicked Icon
    e.currentTarget.classList.toggle("active");
    // Toggle Disabled Class On Panel
    if (e.currentTarget.classList.contains("active")) {
      // Remove Class Disabled From Active Panel
      accordionPanel.forEach((panel) => {
        if (panel.dataset.accordion == e.currentTarget.dataset.accordion) {
          panel.classList.remove("disabled");
        }
      });
    } else {
      // Add Class Disabled To Active Panel
      accordionPanel.forEach((panel) => {
        if (panel.dataset.accordion == e.currentTarget.dataset.accordion) {
          panel.classList.add("disabled");
        }
      });
    }
  });
});

/*
  Form Validation
*/

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const selectMenu = document.getElementById("selectmenu");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const form = document.getElementById("form");

form.onsubmit = function () {
  let valid = true;

  const formData = {
    name: `${nameInput.value}`,
    email: `${emailInput.value}`,
    phone: `${phoneInput.value}`,
    subject: `${selectMenu.value}`,
    message: `${messageInput.value}`,
  };

  let { name: n, email: e, phone: p, subject: s, message: m } = formData;

  // Name Check
  if (n.length < 4) {
    valid = false;
  }

  // Email Check
  if (/\w{1,}@\w{1,}.(com|net|org|edu)/.test(e) == false) {
    valid = false;
  }

  // Phone Check
  if (/^\+\d{2,3}\d{6,}/.test(p) == false) {
    valid = false;
  }

  if (valid == false) {
    return false;
  }
  window.localStorage.setItem("FormData", JSON.stringify(formData));
};

/* 
  TypeWriter
*/

const typewriter = document.querySelector(".landing .intro-text h2");
let typingText = "Welcome In Our Website";
let i = 0;

let typer = setInterval(function () {
typewriter.innerHTML += typingText[i];
  i += 1;
  console.log(i)
  if (i >= typingText.length) {
    clearInterval(typer);
  }
}, 100);
