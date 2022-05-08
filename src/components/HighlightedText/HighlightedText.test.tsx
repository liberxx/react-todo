import React from 'react';
import { render, screen } from '@testing-library/react';
import HighlightedText from '.';

it('renders highlighted text in mark tag', () => {
  render(<HighlightedText text='Test 123' highlight='test' />);
  const highlightedElement = screen.getByTestId('marked-text');
  expect(highlightedElement).toHaveTextContent('Test');
});

it('does not render text in mark tag if highlight prop is empty string', () => {
  render(<HighlightedText text='Test 123' highlight='' />);
  const highlightedElement = screen.queryByTestId('marked-text');
  expect(highlightedElement).not.toBeInTheDocument();
});
