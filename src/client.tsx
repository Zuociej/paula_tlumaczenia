import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'

const router = getRouter()
const rootEl = document.getElementById('root')

if (rootEl) {
  const root = createRoot(rootEl)
  root.render(<RouterProvider router={router} />)
}
