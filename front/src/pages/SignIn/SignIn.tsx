import React, { useState } from 'react'
import style from './SignIn.module.css'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'

const SignIn: React.FC = () => {
    const navigate = useNavigate()
    const [firstError, setFirstError] = useState('')
    const [secondError, setSecondError] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    async function handleSignIn() {
        if (!login) {
            setFirstError('Do not forget to enter your login')
            return
        }
        if (!password) {
            setSecondError('Do not forget to enter your password')
            return
        }
        const response = await fetch('http://localhost:8080/login/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                idusers: 0,
                login: login,
                password: password,
                role: 0
            })
        })
        switch (response.status) {
            case 200: {
                const user = await response.json()
                dispatch(
                    setUser({
                        idusers: user.iddriver,
                        login: login,
                        role: +!user.full_name,
                        full_name: user.full_name,
                        experience: user.experience
                    })
                )
                user.full_name
                    ? navigate('/startUser')
                    : navigate('/startAdmin')
                return
            }
            case 404: {
                setFirstError("This user doesn't have an account")
                return
            }
            case 400: {
                setSecondError('Invalid password')
                return
            }
        }
    }
    return (
        <div className={style.container}>
            <div className={style.toSignUp}>
                <h4>Don&apos;t have an account?</h4>
                <Button variant={'outlined'}>
                    <Link to="/signup">Sign Up </Link>
                </Button>
            </div>

            <main>
                <h1>SIGN IN</h1>
                <TextField
                    required
                    label={'Enter Login'}
                    variant={'outlined'}
                    error={!!firstError}
                    helperText={firstError}
                    value={login}
                    onChange={e => {
                        setLogin(e.target.value)
                        setFirstError('')
                    }}
                />
                <TextField
                    required
                    label={'Enter Password'}
                    type="password"
                    variant={'outlined'}
                    error={!!secondError}
                    helperText={secondError}
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                        setSecondError('')
                    }}
                />
                <Button variant={'contained'} onClick={() => handleSignIn()}>
                    Sign In
                </Button>
            </main>
        </div>
    )
}

export default SignIn
