import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './AddEditCar.module.css'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { removeAciveCar } from '../../store/slices/activeCarSlice'

const AddEditCar: React.FC = () => {
    const activeCar = useSelector((state: any) => state.activeCar.idcar)
    const edit_mode = activeCar ? true : false
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [firstError, setFirstError] = useState('')
    const [secondError, setSecondError] = useState('')
    const [thirdError, setThirdError] = useState('')
    const [fourthError, setFourthError] = useState('')
    const [fifthError, setFifthError] = useState('')

    const [idcar, setIdCar] = useState('')
    const [model, setModel] = useState('')
    const [location, setLocation] = useState('')
    const [experience_start, setExperience_start] = useState(0)
    const [price_per_minute, setPrice_per_minute] = useState(1)
    const [available, setAvailable] = useState(false)

    async function loadCar() {
        const response = await fetch('http://localhost:8080/cars/' + activeCar)
        const json = await response.json()
        setIdCar(json.idcar)
        setModel(json.model)
        setLocation(json.location)
        setExperience_start(json.experience_start)
        setPrice_per_minute(json.price_per_minute)
        setAvailable(json.available)
    }
    useEffect(() => {
        if (edit_mode) loadCar()
    }, [edit_mode])

    function handleCancel() {
        dispatch(removeAciveCar())
        navigate('/cars')
    }
    async function handleSave() {
        if (!idcar) {
            setFirstError('Do not forget to enter car number')
            return
        }
        if (!model) {
            setSecondError('Do not forget to enter car model')
            return
        }
        if (!location) {
            setThirdError('Do not forget to enter car location')
            return
        }
        if (edit_mode) {
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
                    price_per_minute: price_per_minute,
                    available: available
                })
            })
        } else {
            await fetch('http://localhost:8080/cars/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    idcar: idcar,
                    model: model,
                    location: location,
                    experience_start: experience_start,
                    price_per_minute: price_per_minute,
                    available: true
                })
            })
        }

        navigate('/cars')
    }

    return (
        <div className={style.container}>
            <div className={style.main}>
                {/* //eslint-disable-next-line
        //@ts-ignore */}
                {edit_mode ? (
                    <h2>{idcar}</h2>
                ) : (
                    <TextField
                        className={style.input}
                        required
                        label={'Enter Car Number'}
                        variant={'outlined'}
                        value={idcar}
                        onChange={e => {
                            setIdCar(e.target.value)
                            setFirstError('')
                        }}
                        error={!!firstError}
                        helperText={firstError}
                    />
                )}

                <TextField
                    className={style.input}
                    required
                    label={'Enter Car Model'}
                    variant={'outlined'}
                    value={model}
                    onChange={e => {
                        setModel(e.target.value)
                        setSecondError('')
                    }}
                    error={!!secondError}
                    helperText={secondError}
                />
                <TextField
                    className={style.input}
                    required
                    label={'Enter Car Location'}
                    variant={'outlined'}
                    value={location}
                    onChange={e => {
                        setLocation(e.target.value)
                        setThirdError('')
                    }}
                    error={!!thirdError}
                    helperText={thirdError}
                />
                <div className={style.inline}>
                    Available since
                    <TextField
                        className={style.inp}
                        required
                        label={'years'}
                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                        variant={'outlined'}
                        type="number"
                        value={experience_start}
                        onChange={e => {
                            setExperience_start(+e.target.value)
                            setFourthError('')
                        }}
                        error={!!fourthError}
                        helperText={fourthError}
                    />
                    years of experience
                </div>
                <div className={style.inline}>
                    Price per minute
                    <TextField
                        className={style.inp}
                        required
                        label={'BYN'}
                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                        variant={'outlined'}
                        type="number"
                        value={price_per_minute}
                        onChange={e => {
                            setPrice_per_minute(+e.target.value)
                            setFifthError('')
                        }}
                        error={!!fifthError}
                        helperText={fifthError}
                    />
                    BYN
                </div>
            </div>
            <div className={style.btns}>
                <Button
                    className={style.cancel}
                    size="large"
                    variant="outlined"
                    onClick={() => handleCancel()}
                >
                    Cancel
                </Button>
                <Button
                    size="large"
                    variant="contained"
                    onClick={() => handleSave()}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}

export default AddEditCar
