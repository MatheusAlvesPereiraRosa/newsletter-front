import React, { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'

export const Alert = () => {
  const { alert } = useContext(AlertContext)

  if (!alert.isVisible) return null

  return (
    <div
      className={`fixed top-5 right-5 max-w-[300px] rounded-lg p-6 ${alert.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
    >
      {alert.message}
    </div>
  )
}
