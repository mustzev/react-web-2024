import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Layout } from 'src/components/layout/layout'
import { ModalProvider } from 'src/components/modal/modalProvider'
import { router } from 'src/router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    <ModalProvider />
  </StrictMode>,
)
