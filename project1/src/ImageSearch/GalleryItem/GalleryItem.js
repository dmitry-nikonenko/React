import React from 'react';

const GalleryItem = ({
  previewURL,
  likes,
  comments,
  downloads,
  views,
  largeImageURL,
  modalClick,
}) => (
  <li className="gallery-item">
    <img src={previewURL} alt="" />

    <div className="stats">
      <p className="stats-item">
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className="stats-item">
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className="stats-item">
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className="stats-item">
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    <button
      onClick={() => modalClick(largeImageURL)}
      type="button"
      className="fullscreen-button"
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </li>
);

export default GalleryItem;
