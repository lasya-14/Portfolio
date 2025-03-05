 // MENU SHOW/HIDDEN
 const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.querySelectorAll('.nav__link');

// MENU SHOW
if (navToggle) {
navToggle.addEventListener('click', () => {
   navMenu.classList.toggle('show-menu');
});
}

// MENU HIDDEN
navClose.forEach(n => {
n.addEventListener('click', () => {
   navMenu.classList.remove('show-menu');
});
});

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]'),
 tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
tab.addEventListener('click', () => {
   const target = document.querySelector(tab.dataset.target);

   tabContents.forEach(content => {
       content.classList.remove('active');
   });

   target.classList.add('active');

   tabs.forEach(t => {
       t.classList.remove('active');
   });

   tab.classList.add('active');
});
});


// archivements

function openPopup(imageSrc) {
document.getElementById("popup-img").src = imageSrc;
document.getElementById("popup").style.display = "flex";
}

function closePopup() {
document.getElementById("popup").style.display = "none";
}

function downloadCertificate() {
const imageSrc = document.getElementById("popup-img").src;
const link = document.createElement('a');
link.href = imageSrc;
link.download = imageSrc.split('/').pop(); // Extract file name
link.click();
}







document.addEventListener("DOMContentLoaded", function() {
emailjs.init("jlzP8jwjhfQlI7Py1"); // Replace with your EmailJS User ID

document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;
const statusMessage = document.getElementById("statusMessage");

if (name && email && subject && message) {
emailjs.send("service_o42pxbl", "template_bw2er9l", {
   from_name: name,
   from_email: email,
   subject: subject,
   message: message
}).then(
   function(response) {
       statusMessage.innerText = "Message sent successfully!";
       statusMessage.style.color = "green";
       document.getElementById("contactForm").reset();
   },
   function(error) {
       statusMessage.innerText = "Failed to send message. Try again!";
       statusMessage.style.color = "red";
   }
);
} else {
statusMessage.innerText = "Please fill all fields!";
statusMessage.style.color = "red";
}
});
});


