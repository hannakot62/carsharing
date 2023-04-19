import React from 'react'
import { CarType } from '../../types/CarType'
import Car from '../Car/Car'
import style from './CarList.module.css'

interface ICarList {
    isAdmin: boolean
    cars: Array<CarType>
}

const CarList: React.FC<ICarList> = (props: ICarList) => {
    const cars = props.cars
    const carsToRender = cars.map((car: CarType) => (
        <Car car={car} key={car.id_car} isAdmin={props.isAdmin} />
    ))
    return <div className={style.list}>{carsToRender}</div>
}

export default CarList
