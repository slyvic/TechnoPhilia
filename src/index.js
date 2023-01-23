import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from './Store/auth-context'
import { App } from './App'


ReactDOM.render(<AuthContextProvider><BrowserRouter><App /></BrowserRouter></AuthContextProvider>, document.getElementById('root'))

