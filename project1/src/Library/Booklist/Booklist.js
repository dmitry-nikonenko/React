import React from 'react';
import BooklistItem from '../Booklistitem/BooklistItem';

const Booklist = ({ items }) => (
  <div>
    {items.map(el => (
      <BooklistItem key={el.id} {...el.volumeInfo} />
    ))}
  </div>
);

export default Booklist;
