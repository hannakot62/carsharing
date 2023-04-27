import React from 'react'
import './App.css'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import StartUser from './pages/StartUser/StartUser'
import Book from './pages/Book/Book'
import Rent from './pages/Rent/Rent'
import Rides from './pages/Rides/Rides'
import Drivers from './pages/Drivers/Drivers'

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="App">{/*<Drivers />{' '}*/}</div>
        </LocalizationProvider>
    )
}

export default App
