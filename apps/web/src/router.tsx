import { createBrowserRouter } from 'react-router-dom'
import { Home } from 'src/pages/home/home'

export const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
}])
