import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Form } from './index'
import { AlertContext } from '../../context/AlertContext'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter' // Import MockAdapter

// Create a new instance of MockAdapter
const mock = new MockAdapter(axios)

const renderForm = (setAlert: jest.Mock) =>
  render(
    <BrowserRouter>
      {' '}
      {/* Wrap with BrowserRouter */}
      <AlertContext.Provider
        value={{ alert: { isVisible: false, type: '', message: '' }, setAlert }}
      >
        <Form />
      </AlertContext.Provider>
    </BrowserRouter>
  )

describe('Form Component', () => {
  beforeEach(() => {
    // Reset any existing mocks
    mock.reset()
  })

  test('submits form data successfully and displays success alert', async () => {
    // Mock the successful POST request
    mock.onPost('http://localhost:3000/user/create').reply(201, {})

    const setAlert = jest.fn()

    renderForm(setAlert)

    fireEvent.change(screen.getByTestId('fullName'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'john.doe@example.com' },
    })
    fireEvent.change(screen.getByTestId('phone'), {
      target: { value: '1234567890' },
    })
    fireEvent.change(screen.getByTestId('business'), {
      target: { value: 'Acme Corp' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Realizar inscrição/i }))

    await waitFor(() => {
      expect(setAlert).toHaveBeenCalledWith({
        isVisible: true,
        type: 'success',
        message: 'Registrado com sucesso!',
      })
    })
  })

  test('displays error alert when the form submission fails', async () => {
    // Mock the failed POST request
    mock
      .onPost('http://localhost:3000/user/create')
      .reply(400, { message: 'Falha ao registrar!' })

    const setAlert = jest.fn()

    renderForm(setAlert)

    fireEvent.change(screen.getByTestId('fullName'), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'john.doe@example.com' },
    })
    fireEvent.change(screen.getByTestId('phone'), {
      target: { value: '1234567890' },
    })
    fireEvent.change(screen.getByTestId('business'), {
      target: { value: 'Acme Corp' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Realizar inscrição/i }))

    await waitFor(() => {
      expect(setAlert).toHaveBeenCalledWith({
        isVisible: true,
        type: 'error',
        message: 'Falha ao registrar!',
      })
    })
  })
})
