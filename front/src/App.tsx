import React from 'react'
import './App.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
    return (
        <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="App">
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </div>
            </LocalizationProvider>
        </Provider>
    )
}

export default App
