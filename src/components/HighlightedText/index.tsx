import React from 'react';

interface Props {
  text: string,
  highlight: string
}

function HighlightedText ({ text, highlight }: Props) {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const slices = text.split(regex);
  return (
    <span>
      {slices.filter(slice => slice.length > 0).map((slice, i) => {
        return regex.test(slice) ? (
          <mark key={i}>{slice}</mark>
        ) : (
          <span key={i}>{slice}</span>
        );
      })}
    </span>
  );
};

export default HighlightedText;
