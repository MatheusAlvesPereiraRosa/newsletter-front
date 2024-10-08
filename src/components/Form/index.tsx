// Form.jsx
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useContext } from 'react'
import axios from 'axios'
import { AlertContext } from '../../context/AlertContext'
import { useNavigate } from 'react-router-dom'

interface IFormInputs {
  fullName: string
  email: string
  phone: string
  business: string
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>()

  const navigate = useNavigate()
  const { setAlert } = useContext(AlertContext)

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/user/create',
        data,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )

      if (response.status === 200 || response.status === 201) {
        setAlert({
          isVisible: true,
          type: 'success',
          message: 'Registrado com sucesso!',
        })
        navigate('/sucess')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 400) {
          const errorMessage = error.response.data.message

          setAlert({ isVisible: true, type: 'error', message: errorMessage })
        } else if (error.response && error.response.status === 409) {
          const errorMessage = error.response.data.message

          setAlert({
            isVisible: true,
            type: 'error',
            message: errorMessage,
          })
        } else {
          setAlert({
            isVisible: true,
            type: 'error',
            message: 'Falha ao registrar!',
          })
        }
      } else {
        setAlert({
          isVisible: true,
          type: 'error',
          message: 'Aconteceu um erro. Tente de novo mais tarde!',
        })
      }
    }

    setTimeout(() => {
      setAlert({ isVisible: false })
    }, 3000)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[700px]"
    >
      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="fullName">
          Nome Completo
        </label>
        <input
          id="fullName"
          data-testid="fullName"
          placeholder="Insira seu nome completo"
          className="px-4 py-[.65rem] bg-gray-500 text-gray-300 bg-opacity-60 rounded-full"
          type="text"
          {...register('fullName', { required: true })}
        />
        {errors.fullName && (
          <span className="text-red-500 mt-1">
            Nome Completo é obrigatório.
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          data-testid="email"
          placeholder="Insira seu e-mail"
          className="px-4 py-[.65rem] bg-gray-500 text-gray-300 bg-opacity-60 rounded-full"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 mt-1">E-mail é obrigatório.</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="phone">
          Telefone
        </label>
        <input
          id="phone"
          data-testid="phone"
          placeholder="(DDD) 9 0000-0000"
          className="px-4 py-[.65rem] bg-gray-500 text-gray-300 bg-opacity-60 rounded-full"
          type="text"
          {...register('phone', { required: true })}
        />
        {errors.phone && (
          <span className="text-red-500 mt-1">Telefone é obrigatório.</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="business">
          Empresa
        </label>
        <input
          id="business"
          data-testid="business"
          placeholder="Insira sua empresa"
          className="px-4 py-[.65rem] bg-gray-500 text-gray-300 bg-opacity-60 rounded-full"
          type="text"
          {...register('business', { required: true })}
        />
        {errors.business && (
          <span className="text-red-500 mt-1">Empresa é obrigatória.</span>
        )}
      </div>

      <button
        type="submit"
        data-testid="submit-button"
        className="sm:max-w-[189px] text-[18px] mt-2 p-3 bg-[#E30161] hover:bg-white hover:text-[#E30161] transition duration-300 rounded-md text-white font-medium"
      >
        Realizar inscrição
      </button>
    </form>
  )
}
