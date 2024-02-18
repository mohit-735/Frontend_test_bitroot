import React, { useState, useEffect } from 'react';
import './App.css'; 
import Post from './components/Post';
import Modal from './components/Modal'; 
import './components/Post.css'; // Corrected import path for Post CSS
import './components/Modal.css'; // Corrected import path for Modal CSS


const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/posts'); // Update the URL with your API endpoint
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="app">
      <div className="container">
        {posts.map((post) => (
          <Post key={post.id} post={post} onClick={handlePostClick} />
        ))}
      </div>
      {selectedPost && <Modal post={selectedPost} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
