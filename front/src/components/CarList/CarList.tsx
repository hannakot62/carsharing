import React, { useEffect, useState } from 'react'
import { CarType } from '../../types/CarType'
import Car from '../Car/Car'
import style from './CarList.module.css'

interface ICarList {
    isAdmin: boolean
    cars: Array<CarType>
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    selectedCar: string
}

const CarList: React.FC<ICarList> = (props: ICarList) => {
    const cars = props.cars
    console.log(props.selectedCar)
    const [carsToRender, setCarsToRender] = useState(
        cars.map((car: CarType) => (
            <Car
                car={car}
                key={car.idcar}
                isAdmin={props.isAdmin}
                onClick={props.onClick}
                selectedCar={props.selectedCar}
                isSelected={props.selectedCar === car.idcar}
            />
        ))
    )

    useEffect(() => {
        setCarsToRender(
            cars.map((car: CarType) => (
                <Car
                    car={car}
                    key={car.idcar}
                    isAdmin={props.isAdmin}
                    onClick={props.onClick}
                    selectedCar={props.selectedCar}
                    isSelected={props.selectedCar === car.idcar}
                />
            ))
        )
    }, [props.selectedCar, cars])

    return <div className={style.list}>{carsToRender}</div>
}

export default CarList
