// assets/js/formulaire-reservation.js

document.addEventListener('DOMContentLoaded', () => {
  // Gestion du compteur passagers
  const paxInput = document.getElementById('pax');
  const btnMinus = document.getElementById('pax-minus');
  const btnPlus = document.getElementById('pax-plus');

  if (paxInput && btnMinus && btnPlus) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(paxInput.value, 10) || 1;
      if (val > 1) paxInput.value = val - 1;
    });

    btnPlus.addEventListener('click', () => {
      let val = parseInt(paxInput.value, 10) || 1;
      paxInput.value = val + 1;
    });
  }

  // Gestion des tabs (Aller simple, Aller-retour, Multi-destinations)
  const tabSimple = document.getElementById('tab-simple');
  const tabRetour = document.getElementById('tab-retour');
  const tabMulti = document.getElementById('tab-multi');
  const tabs = [tabSimple, tabRetour, tabMulti];

  if (tabs.every(Boolean)) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        // Changer l’état visuel du tab actif
        tabs.forEach(t => {
          t.classList.remove('border-b-2', 'border-bleu-nuit', 'font-bold');
          t.classList.add('border-transparent');
        });
        tab.classList.add('border-b-2', 'border-bleu-nuit', 'font-bold');
        tab.classList.remove('border-transparent');

        // Ici, tu pourras gérer l’affichage conditionnel des champs selon l’onglet sélectionné (TODO)
        // Par exemple : afficher/cacher les champs retour ou étapes selon idx
        // idx = 0 : Aller simple, 1 : Aller-retour, 2 : Multi-destinations
      });
    });
  }

  // À compléter : logique champs conditionnels, autocomplétion, validation, etc.
});
