import React from 'react';

const Publication = ({ data }) => (
  <article className="publication">
    <h2>{data.title}</h2>
    <p>{data.text}</p>
  </article>
);

export default Publication;
