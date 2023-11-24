function hoverImage() {
  const hoverElements = document.querySelectorAll('.project');
  let lastMousePosition = 0;
  let timeoutId;
  let initialX = 0;

  hoverElements.forEach(hoverElement => {
    const hoverImage = hoverElement.querySelector('img[data-hover-image]');
    const dataImage = hoverImage.dataset.hoverImage;

    hoverElement.addEventListener('mousemove', e => {
      const hoverElementRect = hoverElement.getBoundingClientRect();
      const x = e.clientX - hoverElementRect.left - hoverImage.width / 2;
      const direction = x > lastMousePosition ? 'right' : 'left';
      lastMousePosition = x;

      if (direction === 'right') {
        hoverImage.style.transform = `translate(${x}px, 0) rotate(10deg)`;
      } else {
        hoverImage.style.transform = `translate(${x}px, 0) rotate(-10deg)`;
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        hoverImage.style.transform = `translate(${x}px, 0) rotate(0deg)`;
      }, 300);
    });

    hoverElement.addEventListener('mouseenter', () => {
      hoverImage.src = dataImage;
      initialX = parseInt(hoverImage.style.transform.split('(')[1]) || 0;
    });
  });
}

hoverImage();


const projetsListe = document.getElementById("projets-liste");

fetch("/Js/projets.json")
  .then(response => response.json())
  .then(data => {
    const top3Projets = data.projets.filter(projet => projet.top3 === "Oui");

    top3Projets.forEach(projet => {
      const projectDiv = document.createElement("div");
      projectDiv.innerHTML = `
      <img src="${projet.logo}" alt="${projet.altLogo}" width="50" height="50" class="project-logo" data-original-image="${projet.logo}">
      <img src="${projet.hoverImage}" alt="${projet.altImage}" class="project-hover-image" data-hover-image="${projet.hoverImage}">
      <h4>${projet.name}</h4>
      <p class="project-categorie">${projet.categorie}</p>
      <p class="project-cadre">${projet.cadre}</p>
      <p class="project-status">${projet.status}</p>
    `;
      changerCouleurStatut(projet.status, projectDiv.querySelector('.project-status'));
      projectDiv.classList.add("project");
      projetsListe.appendChild(projectDiv);
      projectDiv.addEventListener("click", () => {
        window.location.href = projet.lien;
      });
    });

    hoverImage();
  })
  .catch(error => console.error(error));
