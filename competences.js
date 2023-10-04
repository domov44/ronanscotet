// Récupérez l'élément HTML où vous voulez afficher les compétences
const listeCompetences = document.querySelector('.liste');

// Chargez le fichier JSON contenant les compétences
fetch('/Js/competences.json')
  .then(response => response.json()) // Transformez la réponse en objet JavaScript
  .then(data => {
    // Parcourez les compétences et créez un élément HTML pour chaque compétence
    data.competences.forEach(competence => {
      // Créez un élément HTML pour la compétence
      const elementCompetence = document.createElement('div');
      elementCompetence.classList.add('competence-item');
      
      // Ajoutez le contenu HTML pour la compétence en utilisant les données du JSON
      elementCompetence.innerHTML = `
        <img class="logo" src="${competence.logoTech}" alt="${competence.altLogoTech}" loading="lazy">
        <div class="titre">
        <h3 class="nom">${competence['tech-name']}</h3><p>${competence.maitrise.map(maitrise => `<span class="couleur-pastille pastille-${maitrise.toLowerCase()}">${maitrise}</span>`).join('')}</p>
        </div>
        <div class="pastille">
          ${competence.categorie.map(categorie => `<span class="couleur-pastille pastille-${categorie.toLowerCase()}">${categorie}</span>`).join('')}
        </div>
      `;
      
      // Ajoutez l'élément HTML pour la compétence à l'élément parent
      listeCompetences.appendChild(elementCompetence);
    });
  })
  .catch(error => {
    // Gérez les erreurs éventuelles lors du chargement du fichier JSON
    console.error('Une erreur est survenue lors du chargement des compétences :', error);
  });

  // bouton télécharger cv //
document.addEventListener("DOMContentLoaded", function() {
  var downloadButton = document.querySelector('#bouton-cv');
    
  downloadButton.setAttribute('download', 'Ronan SCOTET CV');
});



