import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { App } from './templates/App'
import './index.css'
import { Success } from './templates/Success'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sucess',
    element: <Success />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
