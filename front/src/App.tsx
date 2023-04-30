import React from 'react'
import './App.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="App">
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </div>
        </LocalizationProvider>
    )
}

export default App
