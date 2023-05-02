import React, { useEffect, useState } from 'react'
import {
    DataGrid,
    GridCallbackDetails,
    GridCellParams,
    GridRowsProp,
    MuiEvent
} from '@mui/x-data-grid'
import style from '../Drivers/Drivers.module.css'
import { Button } from '@mui/material'
import { carsColumns } from './carsColumns'
import { CarType } from '../../types/CarType'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedCar } from '../../store/slices/selectedCarSlice'
import { removeAciveCar, setActiveCar } from '../../store/slices/activeCarSlice'

const Cars: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [selectedRowID, setSelectedRowID] = useState('0')

    const [cars, setCars] = useState(new Array<CarType>())
    const [rows, setRows] = useState<GridRowsProp>([])
    async function loadCars() {
        const response = await fetch('http://localhost:8080/cars/getAll')
        const json = await response.json()
        setCars(json)
        const c = json.map((car: CarType) => {
            return {
                id: car.idcar,
                model: car.model,
                location: car.location,
                experience_start: car.experience_start,
                price_per_minute: car.price_per_minute,
                available: car.available ? 'yes' : 'no'
            }
        })
        setRows(c)
    }

    useEffect(() => {
        loadCars()
        dispatch(removeAciveCar())
    }, [])

    function handleCellClick(
        params: GridCellParams,
        event: MuiEvent<React.MouseEvent>,
        details: GridCallbackDetails
    ): void {
        setSelectedRowID(params.id.toString())
        dispatch(setActiveCar({ idcar: params.id.toString() }))
    }

    function handleEdit() {
        dispatch(setSelectedCar({ idcar: selectedRowID }))
        navigate('/editCar')
    }

    async function handleDelete() {
        await fetch('http://localhost:8080/cars/' + selectedRowID, {
            method: 'DELETE'
        })
        loadCars()
    }
    return (
        <div className={style.container}>
            <h4 className={style.name}>MANAGE CARS</h4>
            <div className={style.gridContainer}>
                <DataGrid
                    columns={carsColumns}
                    rows={rows}
                    onCellClick={handleCellClick}
                />
            </div>
            <div className={style.buttons}>
                <Button
                    size={'large'}
                    className={style.btn}
                    variant={'contained'}
                    onClick={() => navigate('/startAdmin')}
                >
                    Go Back
                </Button>

                <div className={style.controls}>
                    <Button
                        variant={'outlined'}
                        onClick={() => {
                            dispatch(removeAciveCar())
                            navigate('/addCar')
                        }}
                    >
                        add
                    </Button>
                    <Button
                        disabled={selectedRowID === '0'}
                        variant={'outlined'}
                        onClick={() => handleEdit()}
                    >
                        edit
                    </Button>
                    <Button
                        disabled={selectedRowID === '0'}
                        variant={'outlined'}
                        onClick={() => handleDelete()}
                    >
                        delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cars
