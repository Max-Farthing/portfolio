import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
