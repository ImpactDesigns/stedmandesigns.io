import React from 'react'
import Header from './header/Header'

export default function Layout({ children }) {
  return (
    <div>
        <title>Stedman Designs</title>
        <Header />
        <main>
            { children }
        </main>
    </div>
  )
}
