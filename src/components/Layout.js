import React from 'react'
import AppContext from '../contexts/AppContext'
import Header from './header/Header'

export default function Layout({ children }) {
  return (
    <div>
      <AppContext>
        <title>Stedman Designs</title>
          <Header />
          <main>
              { children }
          </main>
      </AppContext>
    </div>
  )
}
