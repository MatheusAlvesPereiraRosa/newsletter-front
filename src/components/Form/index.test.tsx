import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Form } from './index'
import { AlertContext } from '../../context/AlertContext'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

const renderForm = (setAlert: jest.Mock) =>
  render(
    <BrowserRouter>
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

  test('renders form inputs and submit button', () => {
    const setAlert = jest.fn()

    renderForm(setAlert)

    expect(screen.getByTestId('fullName')).toBeInTheDocument()
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('phone')).toBeInTheDocument()
    expect(screen.getByTestId('business')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Realizar inscrição/i })
    ).toBeInTheDocument()
  })

  test('displays required field errors when submitting an empty form', async () => {
    const setAlert = jest.fn()

    renderForm(setAlert)

    fireEvent.submit(
      screen.getByRole('button', { name: /Realizar inscrição/i })
    )

    expect(
      await screen.findByText(/Nome Completo é obrigatório/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/E-mail é obrigatório/i)).toBeInTheDocument()
    expect(screen.getByText(/Telefone é obrigatório/i)).toBeInTheDocument()
    expect(screen.getByText(/Empresa é obrigatória/i)).toBeInTheDocument()
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
