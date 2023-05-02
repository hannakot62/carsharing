import React from 'react'
import style from './Book.module.css'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setStartTime } from '../../store/slices/startTimeSlice'
import dayjs from 'dayjs'

const Book: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fullname = useSelector((state: any) => state.user.full_name)
    const model = useSelector((state: any) => state.selectedCar.model)
    const location = useSelector((state: any) => state.selectedCar.location)
    const idcar = useSelector((state: any) => state.selectedCar.idcar)
    const experience_start = useSelector(
        (state: any) => state.selectedCar.experience_start
    )

    const price = useSelector(
        (state: any) => state.selectedCar.price_per_minute
    )

    async function handleGoBack() {
        await fetch('http://localhost:8080/cars/' + idcar, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                idcar: idcar,
                model: model,
                location: location,
                experience_start: experience_start,
                price_per_minute: price,
                available: true
            })
        })
        navigate('/startUser')
    }

    function handleRent() {
        dispatch(setStartTime(dayjs().format('DD-MM-YYYY HH:mm:ss')))
        navigate('/rent')
    }
    return (
        <div className={style.container}>
            <div className={style.info}>
                <h1>{fullname}</h1>
                <h3 className={style.car}>
                    Car: {model} <span>{idcar}</span>
                </h3>
                <h3>Price per minute: {price} BYN</h3>
                <h4>Location: {location}</h4>
            </div>
            <div className={style.btns}>
                <Button
                    sx={{ backgroundColor: 'white', borderColor: 'white' }}
                    size={'large'}
                    variant={'outlined'}
                    onClick={() => handleGoBack()}
                >
                    Go Back
                </Button>
                <Button
                    size={'large'}
                    variant={'contained'}
                    onClick={() => handleRent()}
                >
                    Rent
                </Button>
            </div>
        </div>
    )
}

export default Book
