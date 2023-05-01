import React, { useEffect, useState } from 'react'
import style from './FinishRide.module.css'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { Button, TextField } from '@mui/material'
import { removeSelectedCar } from '../../store/slices/selectedCarSlice'
import { removeStartTime } from '../../store/slices/startTimeSlice'
import { useNavigate } from 'react-router-dom'

const MILLISECONDS_IN_A_MINUTE = 60000

const FinishRide: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fullname = useSelector((state: any) => state.user.full_name)
    const userID = useSelector((state: any) => state.user.idusers)

    const model = useSelector((state: any) => state.selectedCar.model)
    const start_location = useSelector(
        (state: any) => state.selectedCar.location
    )
    const idcar = useSelector((state: any) => state.selectedCar.idcar)
    const start_time = useSelector((state: any) => state.start_time.start_time)
    const price_per_minute = useSelector(
        (state: any) => state.selectedCar.price_per_minute
    )
    const exp_start = useSelector(
        (state: any) => state.selectedCar.experience_start
    )

    const [end_time, setEnd_time] = useState('')
    const [price, setPrice] = useState(0)
    const [firstError, setFirstError] = useState('')
    const [end_location, setEnd_location] = useState('')

    useEffect(() => {
        setEnd_time(dayjs().format('DD-MM-YYYY HH:mm:ss'))
    }, [])
    useEffect(() => {
        const minutes =
            Math.floor(
                ((dayjs(end_time).toDate().valueOf() -
                    dayjs(start_time).toDate().valueOf()) /
                    MILLISECONDS_IN_A_MINUTE) *
                    100
            ) / 100
        console.log(minutes)
        setPrice(Math.round(price_per_minute * minutes * 100) / 100)
    }, [end_time])

    async function handleOK() {
        if (!end_location) {
            setFirstError('Do not forget to enter your current location')
            return
        }
        dispatch(removeSelectedCar())
        dispatch(removeStartTime())
        await fetch('http://localhost:8080/rides/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                iddriver: userID,
                idcar: idcar,
                start_point: start_location,
                end_point: end_location,
                start_time: dayjs(start_time).format('YYYY-MM-DD HH:mm:ss'),
                end_time: dayjs(end_time).format('YYYY-MM-DD HH:mm:ss'),
                price: price
            })
        })
        await fetch('http://localhost:8080/cars/' + idcar, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                idcar: idcar,
                model: model,
                location: end_location,
                experience_start: exp_start,
                price_per_minute: price_per_minute,
                available: true
            })
        })
        navigate('/startUser')
    }

    return (
        <div className={style.container}>
            <div className={style.info}>
                <h1>{fullname}</h1>
                <h3>
                    {model} <span>{idcar}</span>{' '}
                </h3>
                <h4>Start time: {start_time}</h4>
                <h4>End time: {end_time}</h4>
                <h2>Total price: {price} BYN</h2>
                <h4>Start location: {start_location}</h4>
            </div>
            <div className={style.tf}>
                {' '}
                <TextField
                    required
                    label={'Enter your current location'}
                    variant={'outlined'}
                    error={!!firstError}
                    helperText={firstError}
                    value={end_location}
                    onChange={e => {
                        setEnd_location(e.target.value)
                        setFirstError('')
                    }}
                />
            </div>

            <div className={style.btn}>
                <Button
                    size="large"
                    onClick={() => handleOK()}
                    variant="contained"
                >
                    {' '}
                    Ok
                </Button>
            </div>
        </div>
    )
}

export default FinishRide
