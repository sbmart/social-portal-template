import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Home Menu link', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Messages Menu link', () => {
  render(<App />);
  const linkElement = screen.getByText(/messages/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Friends Menu link', () => {
  render(<App />);
  const linkElement = screen.getByText(/friends/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Search input with a Search placeholder', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/search/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders Logout link', () => {
  render(<App />)
  const LogoutElement = screen.getByText(/logout/i)
  expect(LogoutElement).toBeInTheDocument()
})