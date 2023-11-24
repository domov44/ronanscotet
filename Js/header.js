// menu overlay //

const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", function() {
  overlay.style.left = "0";
  document.body.classList.add("overlay-open", "menu-ouvert");
  updateEyesPosition2();
window.addEventListener('scroll', updateEyesPosition2);
window.addEventListener('resize', updateEyesPosition2);
  });

  closeBtn.addEventListener("click", function() {
    overlay.style.left = "-100%";
    document.body.classList.remove("overlay-open", "menu-ouvert");
    });

    window.addEventListener("scroll", function() {
      var hamburgerButton = document.querySelector(".hamburger");
      if (window.scrollY > 100) {
        hamburgerButton.classList.add("scrolled");
      } else {
        hamburgerButton.classList.remove("scrolled");
      }
    });


// Récupération des éléments HTML
const lienMenu1 = document.querySelector('#lien-menu-overlay1');
const lienMenu2 = document.querySelector('#lien-menu-overlay2');
const lienMenu3 = document.querySelector('#lien-menu-overlay3');
const parent = document.querySelector('.overlay');
const bottomIllustration = parent.querySelector('.corps');
const mouthIllustration = parent.querySelector('.bouche');
const leave = parent.querySelector('.close-btn');

// Fonction pour réinitialiser la propriété css de "mouth"
function resetMouth() {
  mouthIllustration.style.cssText = '';
}

// Définition des actions sur les événements de survol des liens
lienMenu1.addEventListener('mouseover', () => {
  mouthIllustration.style.cssText = 'width: 60px; height:30px; bottom:30px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;';
});

lienMenu2.addEventListener('mouseover', () => {
  mouthIllustration.style.cssText = 'width: 65px; height:35px; bottom:30px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;';
});

lienMenu3.addEventListener('mouseover', () => {
  mouthIllustration.style.cssText = 'width: 70px; height:40px; bottom:30px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;';
});

leave.addEventListener('mouseover', () => {
  mouthIllustration.style.cssText = 'width: 55px; height:20px; border-top-left-radius: 200px; border-top-right-radius: 200px; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px;';
});

// Réinitialisation de la propriété css de "mouth" lorsque la souris quitte la div .menu
const menu = document.querySelector('.menu');
menu.addEventListener('mouseleave', resetMouth);
leave.addEventListener('mouseleave', resetMouth);






// personnage menu 

const parent2 = document.querySelector('.overlay');
const eyes2 = parent2.querySelectorAll('.yeux .oeil i');

function updateEyesPosition2() {
    let rect = parent2.getBoundingClientRect();
    if (parent2.style.left !== "-100%") {
      document.addEventListener('mousemove', onMouseMove2);
    } else {
      document.removeEventListener('mousemove', onMouseMove2);
    }
  }
  

function onMouseMove2(e) {
  let x = e.clientX;
  let y = e.clientY;
  
  eyes2.forEach(function(oeil) {
    let rect = oeil.getBoundingClientRect();
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;
    
    let deltaX = centerX - x;
    let deltaY = centerY - y;
    
    let angle = Math.atan2(deltaY, deltaX);
    
    oeil.style.transform = `rotate(${angle}rad)`;
  });
}

updateEyesPosition2();
window.addEventListener('scroll', updateEyesPosition2);
window.addEventListener('resize', updateEyesPosition2);

