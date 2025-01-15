import { useState } from "react";
import "./App.css";

export default function App() {
  const [searchRepo, setSearchRepo] = useState({ query: "", user: "" });
  const [results, setResults] = useState([]); // Sonuçları saklayacak state

  const handleInputs = (e) => {
    setSearchRepo({ ...searchRepo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { query, user } = searchRepo;

    fetch(`https://api.github.com/search/repositories?q=${query}+user:${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.items || []); // Sonuçları state'e kaydet
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1>Search for a repository</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="query"
            placeholder="Search for a repo.."
            value={searchRepo.query}
            onChange={handleInputs}
            required
          />
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="user"
            placeholder="GitHub user account.."
            value={searchRepo.user}
            onChange={handleInputs}
            required
          />
        </label>
        <br />
        <button>Search</button>
      </form>

      {/* Results Section */}
      <div>
        <h2>Results</h2>
        <ul>
          {results.length > 0 ? (
            results.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.full_name}
                </a>
                <p>{repo.description}</p>
                <p>
                  🌟 Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}
                </p>
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </div>
    </>
  );
}

