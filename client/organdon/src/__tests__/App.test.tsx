/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/LoginPage';

test('renders login form with email and password fields', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('abc@gmail.com');
  const passwordInput = screen.getByPlaceholderText('Your pass');
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('renders login button', () => {
  render(<Login />);
  const loginButton = screen.getByRole('button', { name: /Login/i });
  expect(loginButton).toBeInTheDocument();
});

test('renders signup link', () => {
  render(<Login />);
  const signupLink = screen.getByText(/Signup here/i);
  expect(signupLink).toBeInTheDocument();
});

test('signup link redirects to signup page', () => {
  const { container } = render(<Login />);
  const signupLink = screen.getByText(/Signup here/i);
  fireEvent.click(signupLink);
  expect(container.innerHTML).toMatch('Signup');
});
