import React from 'react';

const Modal = ({ largeImageURL }) => (
  <div className="overlay">
    <div className="modal">
      <img src={largeImageURL} alt="" />
    </div>
  </div>
);
export default Modal;
