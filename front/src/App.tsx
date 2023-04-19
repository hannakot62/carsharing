import React from 'react'
import './App.css'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import StartUser from './pages/StartUser/StartUser'

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="App">
                <StartUser />
                {/*<SignIn />*/}
                {/*<SignUp />*/}
            </div>
        </LocalizationProvider>
    )
}

export default App
