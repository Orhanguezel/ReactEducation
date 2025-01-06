document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'https://hp-api.onrender.com/api';
  const container = document.getElementById('character-container');

  async function fetchCharacters() {
    try {
     
      const response = await fetch(`${API_URL}/characters`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const characters = await response.json();
      displayCharacters(characters);
    } catch (error) {
      console.error('Error fetching characters:', error);
      if (container) {
        container.innerHTML = `<p>Failed to load characters. Please try again later.</p>`;
      }
    }
  }

  function displayCharacters(characters) {
    if (!container) return;

    characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('character-card');

      card.innerHTML = `
        <img src="${character.image || 'https://via.placeholder.com/300x300?text=No+Image'}" alt="${character.name}">
        <div class="card-content">
          <h2>${character.name}</h2>
          <p><span class="house">${character.house || 'Unknown House'}</span></p>
          <p><strong>Patronus:</strong> ${character.patronus || 'Unknown'}</p>
          <p><strong>Actor:</strong> ${character.actor || 'Not Available'}</p>
        </div>
      `;

      container.appendChild(card);
    });
  }

  fetchCharacters();
});

