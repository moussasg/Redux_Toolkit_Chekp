import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from "./app/store"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> {/*5)Provider nmdolha props */}
    <App/> {/*App entre Provider*/}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
