AOS.init();

var slider = document.getElementById("slider");
var images = slider.getElementsByTagName("img");
var index = 0;

function slide() {
  images[index].style.display = "none";
  index = (index + 1) % images.length;
  images[index].style.display = "block";
};

setInterval(slide, 1500);


const btn = document.querySelector('#closed').addEventListener('click', (e) => {
  e.preventDefault();
   document.querySelector('#idd').value = '';
   
   document.querySelector('.email').value = '';
   
   document.querySelector('.message').value = '';
   setTimeout(() => {
     alert("MESSAGE SENT SUCCESSFULLY 🎉🎉");
   }, 300);
   
});
const show = document.querySelector('.slide-menu');
const clickedMenu = document.querySelector('#click-menu');
clickedMenu.addEventListener('click', () => {
  show.style.display = 'block';
});

const closeImg = document.querySelector('.close-img');
closeImg.addEventListener('click', () => {
  show.style.display = 'none';
});

const closeTag = document.querySelector('.slide-menu');
closeTag.addEventListener('click', () => {
  show.style.display = 'none';
});
