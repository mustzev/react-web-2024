import { ReactNode } from 'react'
import './layout.css'
import Sidebar from './sidebar/sidebar'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page-container">
        {children}
      </div>
    </div>
  )
}
