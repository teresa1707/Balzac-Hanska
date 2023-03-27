import ReactDOM from 'react-dom/client'
import React from 'react'
import { TopPage } from 'Components/ScrollUp/TopPage'
import { BrowserRouter } from 'react-router-dom'
import { App } from './Container/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <TopPage>
            <App />
        </TopPage>
    </BrowserRouter>
)
