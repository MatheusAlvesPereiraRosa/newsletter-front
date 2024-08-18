import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert } from './index';
import { AlertContext } from '../../context/AlertContext';

describe('Alert Component', () => {
  const renderAlert = (isVisible: boolean, type: string, message: string) =>
    render(
      <AlertContext.Provider value={{ alert: { isVisible, type, message }, setAlert: jest.fn() }}>
        <Alert />
      </AlertContext.Provider>
    );

  test('renders nothing when alert is not visible', () => {
    renderAlert(false, 'success', 'Test Message');
    expect(screen.queryByText(/Test Message/i)).not.toBeInTheDocument();
  });

  test('renders success alert when visible', () => {
    renderAlert(true, 'success', 'Success Message');
    expect(screen.getByText(/Success Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Success Message/i)).toHaveClass('bg-green-600');
  });

  test('renders error alert when visible', () => {
    renderAlert(true, 'error', 'Error Message');
    expect(screen.getByText(/Error Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Error Message/i)).toHaveClass('bg-red-600');
  });
});
