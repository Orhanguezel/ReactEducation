const form = document.getElementById("form");
const input = document.getElementById("searchData");
const container = document.getElementById("cardContainer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTarget = input.value.toLowerCase().trim();
  const harryData = await getData(searchTarget);

  harryData.forEach((item) => {
    createCard(item);
  });
});

async function getData(endpoint) {
  const url = `https://potterapi-fedeperin.vercel.app/en/${endpoint}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

function createCard(book) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${book.cover}" alt="${book.title}">
    <div>
    <h3>${book.title}</h3>
    <p>${book.description}</p>
    <span>Release Date: ${book.releaseDate}</span>
    <span>Pages: ${book.pages}</span>
    </div>
    `;
  container.appendChild(card);
}
