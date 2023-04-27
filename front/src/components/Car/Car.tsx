import React, { useEffect, useState } from 'react'
import { CarType } from '../../types/CarType'
import style from './Car.module.css'
import { Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

interface ICar {
    car: CarType
    isAdmin: boolean
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    selectedCar: string
    isSelected: boolean
}

const Car: React.FC<ICar> = (props: ICar) => {
    const car = props.car
    const [selected, setSelected] = useState(props.isSelected)
    useEffect(() => {
        setSelected(props.isSelected)
    }, [props.isSelected])

    return (
        <div
            className={style.container.concat(' ' + style[selected.toString()])}
            onClick={event => {
                props.onClick(event)
            }}
        >
            <div className={style.info}>
                <h2 className={style.main}>
                    {car.model} <span>{car.id_car}</span>
                </h2>
                <h4>Where: {car.location}</h4>
                <h5>
                    Is available since {car.experience_start} years of
                    experience
                </h5>
                <h3 className={style.price}>
                    {car.price_per_minute} byn per minute
                </h3>
            </div>
            {props.isAdmin ? (
                <div className={style.controls}>
                    <IconButton aria-label={'edit'}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label={'delete'}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Car
