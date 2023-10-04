// obtenir une référence à la grille de projets
const grid = document.querySelector('.grid-projets');

// obtenir les données JSON
fetch('/Js/projets.json')
  .then(response => response.json())
  .then(data => {
    // itérer sur chaque projet et générer le contenu HTML pour chaque carte de projet
    data.projets.forEach(projet => {
      // créer un élément de lien pour la carte du projet
      const lien = document.createElement('a');
      lien.classList.add('carte');
      lien.href = projet.lien;

      // créer un élément d'image pour la carte du projet
      const img = document.createElement('img');
      img.src = projet.gallerieImage;
      img.alt = projet.altImage;
      img.loading = 'lazy';

      // ajouter l'image à l'élément de lien
      lien.appendChild(img);

      // ajouter la carte de projet à la grille
      grid.appendChild(lien);
    });
  })
  .catch(error => console.error(error));



