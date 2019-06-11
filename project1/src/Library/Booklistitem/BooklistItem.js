import React from 'react';

const BooklistItem = ({
  imageLinks,
  title,
  publisher,
  publishedDate,
  pageCount,
  rating,
}) => (
  <div>
    <img src={imageLinks.smallThumbnail} alt="" />
    <h2>{title}</h2>
    <h3>{publisher}</h3>
    <h4>{publishedDate}</h4>
    <h5>{pageCount}</h5>
    <h6>{rating}</h6>
  </div>
);

export default BooklistItem;
