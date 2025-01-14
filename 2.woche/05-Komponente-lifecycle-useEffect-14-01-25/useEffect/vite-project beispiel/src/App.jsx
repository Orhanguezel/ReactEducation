import { useState, useEffect } from 'react';
import './App.css';
import Spinner from "react-bootstrap/Spinner";


function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPost(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log('post', post);

  return (
    <>
      <h1>Jsonplaceholder Posts</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ul>
          {post.map((item) => (
            <li key={crypto.randomUUID()}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;


