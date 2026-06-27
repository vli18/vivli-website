import React from 'react';

export const renderAuthors = (authors, highlightName) => {
  const parts = authors.split(highlightName);
  if (parts.length === 1) return authors;
  return (
    <>
      {parts[0]}
      <span style={{ fontWeight: '600', color: 'rgba(0, 0, 0, 0.9)' }}>{highlightName}</span>
      {parts[1]}
    </>
  );
};
