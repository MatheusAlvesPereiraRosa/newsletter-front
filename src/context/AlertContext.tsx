import React, { createContext, useState, ReactNode } from 'react'

// Define the shape of the alert object
interface Alert {
  isVisible: boolean
  type?: string
  message?: string
}

// Define the shape of the context value
interface AlertContextType {
  alert: Alert
  setAlert: React.Dispatch<React.SetStateAction<Alert>>
}

// Provide an initial context value
const initialAlert: Alert = {
  isVisible: false,
  type: '',
  message: '',
}

// Create the context with the initial value and type
export const AlertContext = createContext<AlertContextType>({
  alert: initialAlert,
  setAlert: () => {}, // A placeholder function
})

interface Props {
  children: ReactNode
}

export const AlertProvider = ({ children }: Props) => {
  const [alert, setAlert] = useState<Alert>(initialAlert)

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
