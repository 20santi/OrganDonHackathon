import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import Login from '../pages/LoginPage';
import { store } from '@/utils/store';
import { LoginForm } from '@/components/LoginForm';

describe('Login page component', () => { 
  it("displays correct header text and other important text", () => {
    render(
      <Provider store={store}>
        <Router>
          <Login/>
        </Router>
      </Provider>
    );

    const headrText = screen.getByText("Login to Organ");
    const headerSpanText = screen.getByText("Link");
    const emailLableText = screen.getByLabelText("Email");
    const passwordLabelText = screen.getByLabelText("Password");
    const dontHaveAccountText = screen.getByText("Don't have an account ?")
    expect(headrText).toBeInTheDocument();
    expect(headerSpanText).toBeInTheDocument();
    expect(emailLableText).toBeInTheDocument();
    expect(passwordLabelText).toBeInTheDocument();
    expect(dontHaveAccountText).toBeInTheDocument();
  });

  it('should render email and password fields', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login/>
        </Router>
      </Provider>
    );
    expect(screen.getByPlaceholderText('abc@gmail.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your pass')).toBeInTheDocument();
  });

  it('should display login button', async () => {

    render(
      <Provider store={store}>
        <Router>
          <LoginForm/>
        </Router>
      </Provider>
    );

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
  });
});
