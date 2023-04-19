import React from 'react'
import style from './SignUp.module.css'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

const SignUp: React.FC = () => {
    return (
        <div className={style.container}>
            <h1>Let&apos;s Register Now!</h1>
            <div className={style.inputs}>
                <TextField
                    required
                    label={'Enter Login'}
                    variant={'outlined'}
                />
                <TextField
                    required
                    label={'Enter Password'}
                    variant={'outlined'}
                />
                <TextField
                    required
                    label={'Enter Your Name'}
                    variant={'outlined'}
                />
                <TextField
                    required
                    label={'Enter Your Surname'}
                    variant={'outlined'}
                />
                <DatePicker defaultValue={dayjs()} />
            </div>
            <Button className={style.btn} size={'large'} variant={'contained'}>
                Sign Up
            </Button>
            <Button
                id={'btn2'}
                variant={'text'}
                size={'small'}
                className={style.btn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default SignUp
