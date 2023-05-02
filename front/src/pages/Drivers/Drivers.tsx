import React, { useEffect, useState } from 'react'
import {
    DataGrid,
    GridCallbackDetails,
    GridCellParams,
    GridRowsProp,
    MuiEvent
} from '@mui/x-data-grid'
import style from './Drivers.module.css'
import { Button } from '@mui/material'
import { driversColumns } from './driversColumns'
import { DriverType } from '../../types/DriverType'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    removeAciveDriver,
    setActiveDriver
} from '../../store/slices/activeDriverSlice'

const Drivers: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [selectedRowID, setSelectedRowID] = useState('0')

    const [drivers, setDrivers] = useState(new Array<DriverType>())
    const [rows, setRows] = useState<GridRowsProp>([])
    async function loadDrivers() {
        const response = await fetch('http://localhost:8080/driver/getAll')
        const json = await response.json()
        setDrivers(json)
        const d = json.map((driver: DriverType) => {
            return {
                id: driver.iddriver,
                iddriver: driver.iddriver,
                fullname: driver.full_name,
                experience: driver.experience
            }
        })
        setRows(d)
    }

    useEffect(() => {
        loadDrivers()
    }, [])

    function handleCellClick(
        params: GridCellParams,
        event: MuiEvent<React.MouseEvent>,
        details: GridCallbackDetails
    ): void {
        setSelectedRowID(params.id.toString())
        dispatch(setActiveDriver({ iddriver: params.id }))
    }

    function handleGoBack() {
        dispatch(removeAciveDriver())
        navigate('/startAdmin')
    }

    async function handleDelete() {
        await fetch('http://localhost:8080/driver/' + selectedRowID, {
            method: 'DELETE'
        })
        loadDrivers()
    }

    return (
        <div className={style.container}>
            <h4 className={style.name}>MANAGE DRIVERS</h4>
            <div className={style.gridContainer}>
                <DataGrid
                    columns={driversColumns}
                    rows={rows}
                    onCellClick={handleCellClick}
                />
            </div>
            <div className={style.buttons}>
                <Button
                    size={'large'}
                    className={style.btn}
                    variant={'contained'}
                    onClick={() => handleGoBack()}
                >
                    Go Back
                </Button>

                <div className={style.controls}>
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

export default Drivers
