// js global

const iconAlternate = document.getElementById('icon-alternate');
const heartIcon = document.querySelector('.heart-icon');

iconAlternate.addEventListener('mouseover', function() {
  heartIcon.classList.remove('heart-icon');
  heartIcon.classList.add('star-icon');
});

iconAlternate.addEventListener('mouseout', function() {
  heartIcon.classList.remove('star-icon');
  heartIcon.classList.add('heart-icon');
});


// apparition opacité
const observerOptions = {
  threshold: 0.5
};

const webmasterElements = document.querySelectorAll('.container .webmaster h2, h2, .container .webmaster p, .bloc-texte .texte, h1, .info h3, .info p, h3');

webmasterElements.forEach(element => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(element);
});

// animation fondu 
function handleFadeInTop() {
  const elements = document.querySelectorAll('.grid-container, .project, .competence-item, .carte img');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = (elementTop < window.innerHeight);
    if (isVisible) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleFadeInTop);

  


// liens smooth scroll
var liens = document.querySelectorAll('#bouton-ancre');

liens.forEach(function(lien) {
  lien.addEventListener('click', function(e) {

    // Empêche le comportement par défaut du lien
    e.preventDefault();

    // valeur du lien
    var cible = document.querySelector(this.getAttribute('href'));

    // position
    var position = cible.offsetTop;

    // Scroll
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  });
});

