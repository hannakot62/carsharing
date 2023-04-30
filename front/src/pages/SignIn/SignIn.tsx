import React from 'react'
import style from './SignIn.module.css'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SignIn: React.FC = () => {
    //TODO errors
    const navigate = useNavigate()

    function handleSignIn() {
        navigate('/startUser')
    }
    return (
        <div className={style.container}>
            <div className={style.toSignUp}>
                <h4>Don&apos;t have an account?</h4>
                <Button variant={'outlined'}>Sign Up </Button>
            </div>

            <main>
                <h1>SIGN IN</h1>
                <TextField
                    required
                    label={'Enter Login'}
                    variant={'outlined'}
                />
                <TextField
                    required
                    label={'Enter Password'}
                    type="password"
                    variant={'outlined'}
                />
                <Button variant={'contained'} onClick={() => handleSignIn()}>
                    Sign In
                </Button>
            </main>
        </div>
    )
}

export default SignIn
