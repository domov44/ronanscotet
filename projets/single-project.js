fetch('/Js/projets.json?v=1')
  .then(response => response.json())
  .then(data => {
    const projets = data.projets;

    const afficherProjet = (nomProjet) => {
      const projet = projets.find(p => p.name === nomProjet);

      if (projet) {
        const texte = document.querySelector('.texte');
        texte.textContent = projet.description;

        const quelquesMots = document.querySelector('.quelques-mots');
        quelquesMots.textContent = projet.En_quelques_mots;

        const imgPres = document.querySelector('.single-project-img');
        imgPres.src = projet.gallerieImage;
        imgPres.alt = projet.altImage;

        const lienSite = document.querySelector('#bouton-projets');
        lienSite.href = projet.lien_site;

        const keypoint = document.querySelector('.keypoint');
        keypoint.innerHTML = `
      <span class="annee annee-${projet.annee.toLowerCase()}">${projet.annee}</span>
      <span class="cadre cadre-${projet.cadre.toLowerCase()}">${projet.cadre}</span>
      <span class="project-status">${projet.status}</span>
    `;

        const spanStatus = document.querySelector('.project-status');
        changerCouleurStatut(projet.status, spanStatus);

        const lienImgPc = document.querySelector('.capture-projet-pc');
        lienImgPc.src = projet.capture_pc;

        const lienImgMobile = document.querySelector('.capture-projet-mobile');
        lienImgMobile.src = projet.capture_mobile;

        const listeCompetences = document.querySelector(".liste");
        listeCompetences.innerHTML = ""; // Supprime toutes les compétences précédentes

        const urlCompetences = "/Js/competences.json";

        fetch(urlCompetences)
          .then(response => response.json())
          .then(dataCompetences => {
            const competencesProjets = projet.competences || [];

            competencesProjets.forEach(competenceProjet => {
              const matchingCompetences = dataCompetences.competences.filter(competence => {
                const techNames = competence["tech-name"].split(", ");
                return techNames.includes(competenceProjet);
              });

              matchingCompetences.forEach(matchingCompetence => {
                const competenceHtml = document.createElement("div");
                competenceHtml.classList.add("competence-item");
                competenceHtml.innerHTML = `
            <img class="logo" src="${matchingCompetence.logoTech}" alt="${matchingCompetence.altLogoTech}">
            <h3 class="nom">${matchingCompetence["tech-name"]}</h3>
            <div class="pastille">
              ${matchingCompetence.categorie.map(categorie => `<span class="couleur-pastille pastille-${categorie.toLowerCase()}">${categorie}</span>`).join('')}
            </div>
          `;

                listeCompetences.appendChild(competenceHtml);
              });
            });
          })
          .catch(error => console.error(error));
      } else {
        const texte = document.querySelector('.texte');
        texte.textContent = "Le projet n'existe pas.";
      }
    };

    const nomProjet = document.querySelector('body').dataset.nomProjet;

    afficherProjet(nomProjet);
  });
