import React, { useState } from 'react'
import style from './SignUp.module.css'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux'

const MILLISECONDS_IN_A_YEAR = 31536000000

const SignUp: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [date, setDate] = useState(dayjs())

    const [firstError, setFirstError] = useState('')
    const [secondError, setSecondError] = useState('')
    const [thirdError, setThirdError] = useState('')
    const [fourthError, setFourthError] = useState('')

    async function handleSignUp() {
        if (!login) {
            setFirstError('Do not forget to enter your login')
            return
        }
        if (!password) {
            setSecondError('Do not forget to enter your password')
            return
        }
        if (!name) {
            setThirdError('Do not forget to enter your name')
            return
        }
        if (!surname) {
            setFourthError('Do not forget to enter your surname')
            return
        }
        const experience =
            Math.floor(
                ((dayjs().toDate().valueOf() - date.toDate().valueOf()) /
                    MILLISECONDS_IN_A_YEAR) *
                    100
            ) / 100
        const response = await fetch('http://localhost:8080/login/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                login: login,
                password: password,
                role: 0,
                full_name: name + ' ' + surname,
                experience: experience
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
                navigate('/startUser')
                return
            }
            case 400: {
                setFirstError('This user already has an account')
                return
            }
        }
    }

    return (
        <div className={style.container}>
            <h1>Let&apos;s Register Now!</h1>
            <div className={style.inputs}>
                <TextField
                    required
                    label={'Enter Login'}
                    variant={'outlined'}
                    value={login}
                    onChange={e => {
                        setLogin(e.target.value)
                        setFirstError('')
                    }}
                    error={!!firstError}
                    helperText={firstError}
                />
                <TextField
                    required
                    label={'Enter Password'}
                    variant={'outlined'}
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                        setSecondError('')
                    }}
                    error={!!secondError}
                    helperText={secondError}
                />
                <TextField
                    required
                    label={'Enter Your Name'}
                    variant={'outlined'}
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                        setThirdError('')
                    }}
                    error={!!thirdError}
                    helperText={thirdError}
                />
                <TextField
                    required
                    label={'Enter Your Surname'}
                    variant={'outlined'}
                    value={surname}
                    onChange={e => {
                        setSurname(e.target.value)
                        setFourthError('')
                    }}
                    error={!!fourthError}
                    helperText={fourthError}
                />
                <DatePicker
                    label="Driving License Date of Issue"
                    value={date}
                    onChange={newValue => setDate(dayjs(newValue))}
                    disableFuture
                />
            </div>
            <Button
                onClick={() => handleSignUp()}
                className={style.btn}
                size={'large'}
                variant={'contained'}
            >
                Sign Up
            </Button>
            <Button
                id={'btn2'}
                variant={'text'}
                size={'small'}
                className={style.btn}
            >
                <Link to="/signin"> Sign In</Link>
            </Button>
        </div>
    )
}

export default SignUp
