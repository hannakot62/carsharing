import React, { useState } from 'react'
import style from './Rent.module.css'
import { Button } from '@mui/material'
import dayjs from 'dayjs'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TimeClock } from '@mui/x-date-pickers/TimeClock'

const Rent: React.FC = () => {
    const fullname = useSelector((state: any) => state.user.full_name)
    const model = useSelector((state: any) => state.selectedCar.model)
    const location = useSelector((state: any) => state.selectedCar.location)
    const idcar = useSelector((state: any) => state.selectedCar.idcar)
    const start_time = useSelector((state: any) => state.start_time.start_time)
    const price = useSelector(
        (state: any) => state.selectedCar.price_per_minute
    )
    const [currentTime, setCurrentTime] = useState(dayjs())

    setInterval(() => {
        setCurrentTime(dayjs())
    }, 1000)

    return (
        <div className={style.container}>
            <main className={style.main}>
                <div className={style.info}>
                    <h1>{fullname}</h1>
                    <h3 className={style.car}>
                        Car: {model} <span>{idcar}</span>
                    </h3>
                    <h3>Price per minute: {price} BYN</h3>
                    <h4>Location: {location}</h4>
                    <h4>Start Time: {start_time}</h4>
                </div>
                <TimeClock value={currentTime} />
            </main>
            <div className={style.btns}>
                <Button size={'large'} variant={'contained'}>
                    <Link to="/finishRide">End</Link>
                </Button>
            </div>
        </div>
    )
}

export default Rent
