function changerCouleurStatut(status, element) {
    element.style.background = "rgb(42 33 42)";
    element.style.padding = "5px 10px 5px 10px";
    element.style.borderRadius = "8px"; 
    element.style.border = "1px solid"; 
    element.style.fontSize= '20px';
  switch (status) {
  case "Terminé":
  element.style.color = "#50E3C2";
  break;
  case "En cours...":
  element.style.color = "#FAB3A9";
  break;
  default:
  element.style.color = "red";
  break;
  }
}

