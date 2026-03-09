import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const where = "here";

const reactElement = React.createElement(
  'a',
  { href: "https://www.google.com", target: "_blank" },
  'visit google ',
  where
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElement}
  </StrictMode>,
)
