// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherBlock title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherBlock/i);
    expect(titleElement).toBeInTheDocument();
});
