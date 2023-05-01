import React, { useEffect, useState } from 'react'
import style from './Rides.module.css'
import { Button } from '@mui/material'

import {
    DataGrid,
    GridCallbackDetails,
    GridCellParams,
    GridRowsProp,
    MuiEvent
} from '@mui/x-data-grid'
import { adminRidesColumns } from './adminRidesColumns'
import dayjs from 'dayjs'
import { userRidesColumns } from './userRidesColumns'
import { useSelector } from 'react-redux'
import { RideType } from '../../types/RideType'
import { useNavigate } from 'react-router-dom'

const Rides: React.FC = () => {
    const navigate = useNavigate()
    const [selectedRowID, setSelectedRowID] = useState('0')
    const userID = useSelector((state: any) => state.user.idusers)

    const isAdmin = !!useSelector((state: any) => state.user.role)
    const fullname = useSelector((state: any) => state.user.full_name)
    const [rides, setRides] = useState(new Array<RideType>())
    const [rows, setRows] = useState<GridRowsProp>([])
    async function loadRides() {
        const response = await fetch('http://localhost:8080/rides/' + userID)
        const json = await response.json()
        setRides(json)
        const r = json.map((ride: RideType) => {
            return {
                id: ride.idride,
                iddriver: ride.iddriver,
                idcar: ride.idcar,
                start_point: ride.start_point,
                end_point: ride.end_point,
                start_time: ride.start_time,
                end_time: ride.end_time,
                price: ride.price
            }
        })
        setRows(r)
    }

    useEffect(() => {
        loadRides()
    }, [])

    const columns = isAdmin ? adminRidesColumns : userRidesColumns

    function handleGoBack() {
        isAdmin ? navigate('/startAdmin') : navigate('/startUser')
    }

    function handleCellClick(
        params: GridCellParams,
        event: MuiEvent<React.MouseEvent>,
        details: GridCallbackDetails
    ): void {
        setSelectedRowID(params.id.toString())
    }

    return (
        <div className={style.container}>
            <h4 className={style.name}>{isAdmin ? 'all' : fullname} rides</h4>
            <div className={style.gridContainer}>
                <DataGrid
                    columns={columns}
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

                {isAdmin ? (
                    <div className={style.controls}>
                        <Button
                            disabled={selectedRowID === '0'}
                            variant={'outlined'}
                        >
                            edit
                        </Button>
                        <Button
                            disabled={selectedRowID === '0'}
                            variant={'outlined'}
                        >
                            delete
                        </Button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Rides
