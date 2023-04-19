import React from 'react'
import style from './Rent.module.css'
import { Button } from '@mui/material'
import dayjs from 'dayjs'

const Rent: React.FC = () => {
    const fullname = 'Anna Kotyagova'
    const model = 'vw polo'
    const location = 'platonova 39'
    const start_time = dayjs().format('DD-MM-YYYY HH:mm:ss')
    return (
        <div className={style.container}>
            <div className={style.info}>
                <h1>{fullname}</h1>
                <h3>Car: {model}</h3>
                <h4>Start Location: {location}</h4>
                <h4>Start Time: {start_time}</h4>
            </div>
            <div className={style.btns}>
                <Button size={'large'} variant={'contained'}>
                    End
                </Button>
            </div>
        </div>
    )
}

export default Rent
