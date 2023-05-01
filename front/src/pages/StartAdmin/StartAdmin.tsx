import React from 'react'
import style from './StartAdmin.module.css'
import { Button } from '@mui/material'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'

const StartAdmin: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogOut() {
        dispatch(removeUser())
        navigate('/signin')
    }

    return (
        <div className={style.container}>
            <h1>HELLO, BOSS</h1>
            <h5>Choose what to work with:</h5>
            <div className={style.btns}>
                <Button variant="contained" size="large">
                    <Link to="/drivers"> Drivers</Link>
                </Button>
                <Button variant="contained" size="large">
                    <Link to="/cars"> cars</Link>
                </Button>
                <Button variant="contained" size="large">
                    <Link to="/rides"> rides</Link>
                </Button>
                <Button variant="contained" size="large">
                    <Link to="/fines"> fines</Link>
                </Button>
            </div>
            <Button
                variant="outlined"
                className={style.out}
                onClick={() => handleLogOut()}
            >
                log out <DirectionsRunIcon />
            </Button>
        </div>
    )
}

export default StartAdmin
