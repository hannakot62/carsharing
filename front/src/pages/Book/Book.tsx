import React from 'react'
import style from './Book.module.css'
import { Button } from '@mui/material'

const Book: React.FC = () => {
    const fullname = 'Anna Kotyagova'
    const model = 'vw polo'
    const location = 'platonova 39'
    return (
        <div className={style.container}>
            <div className={style.info}>
                <h1>{fullname}</h1>
                <h3>Car: {model}</h3>
                <h4>Location: {location}</h4>
            </div>
            <div className={style.btns}>
                <Button size={'large'} variant={'outlined'}>
                    Go Back
                </Button>
                <Button size={'large'} variant={'contained'}>
                    Rent
                </Button>
            </div>
        </div>
    )
}

export default Book
