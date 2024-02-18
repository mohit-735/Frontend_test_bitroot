// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ post, onClick }) => {
  return (
    <div className="post" onClick={() => onClick(post)}>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </div>
  );
};

export default Post;
