// src/components/Modal.js
import React from 'react';
 

const Modal = ({ post, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
