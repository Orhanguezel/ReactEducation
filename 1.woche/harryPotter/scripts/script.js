document.getElementById('menu-toggle').addEventListener('click', () => {
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'https://hp-api.onrender.com/api';
  const contentContainer = document.getElementById('content-container');

  async function fetchData(endpoint) {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  function clearContent() {
    contentContainer.innerHTML = '';
  }

  function displayCharacters(characters) {
    clearContent();
    const characterContainer = document.createElement('div');
    characterContainer.classList.add('character-container');

    characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('character-card');
      card.innerHTML = `
        <img src="${character.image || 'https://via.placeholder.com/300x300?text=No+Image'}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p><strong>House:</strong> ${character.house || 'Unknown'}</p>
        <p><strong>Patronus:</strong> ${character.patronus || 'Unknown'}</p>
        <p><strong>Actor:</strong> ${character.actor || 'Not Available'}</p>
      `;
      characterContainer.appendChild(card);
    });

    contentContainer.appendChild(characterContainer);
  }

  function displaySpells(spells) {
    clearContent();
    const spellsContainer = document.createElement('div');
    spellsContainer.classList.add('spells-container');

    spells.forEach(spell => {
      const spellCard = document.createElement('div');
      spellCard.classList.add('spell-card');
      spellCard.innerHTML = `
        <h2>${spell.name}</h2>
        <p>${spell.description || 'No description available.'}</p>
      `;
      spellsContainer.appendChild(spellCard);
    });

    contentContainer.appendChild(spellsContainer);
  }

  async function handleOptionClick(action) {
    switch (action) {
      case 'all-characters':
        const allCharacters = await fetchData('characters');
        if (allCharacters) displayCharacters(allCharacters);
        break;
      case 'students':
        const students = await fetchData('characters/students');
        if (students) displayCharacters(students);
        break;
      case 'staff':
        const staff = await fetchData('characters/staff');
        if (staff) displayCharacters(staff);
        break;
      case 'house':
        const houseCharacters = await fetchData('characters/house/gryffindor');
        if (houseCharacters) displayCharacters(houseCharacters);
        break;
      case 'spells':
        const spells = await fetchData('spells');
        if (spells) displaySpells(spells);
        break;
      default:
        clearContent();
        contentContainer.innerHTML = '<p>Invalid action selected.</p>';
    }
  }

  document.getElementById('options-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('option-button')) {
      const action = e.target.getAttribute('data-action');
      handleOptionClick(action);
    }
  });
});
