import React, { useState } from 'react'
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

const Rides: React.FC = () => {
    const [selectedRowID, setSelectedRowID] = useState('0')

    const isAdmin = !!useSelector((state: any) => state.user.role)
    const fullname = useSelector((state: any) => state.user.full_name)
    //todo user and their role
    //тавить ride id в id, форматировать дату в строку

    const [rows, setRows] = useState<GridRowsProp>([
        {
            id: '1',
            id_driver: '4',
            id_car: '87',
            start_point: 'kolasa 28',
            end_point: 'hikalo 9',
            start_time: dayjs('2019-01-25').format('DD/MM/YYYY-HH:mm:ss'),
            end_time: dayjs(new Date()).format('DD/MM/YYYY-HH:mm:ss'),
            price: 12.98
        },
        {
            id: '34',
            id_driver: '42',
            id_car: '871',
            start_point: 'kolasa 28',
            end_point: 'hikalo 9 jhgjad ydg cygc yaga gc dci',
            start_time: dayjs('2023-01-25').format('DD/MM/YYYY-HH:mm:ss'),
            end_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            price: 1976
        },
        {
            id: '1134',
            id_driver: '42',
            id_car: '877771',
            start_point: 'kolasa 28',
            end_point: 'hikalo 9 jhgjad ydg cygc yaga gc dci',
            start_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            end_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            price: 1976
        },
        {
            id: '4545',
            id_driver: '42',
            id_car: '871',
            start_point: 'kolasa 28',
            end_point: 'hikalo 9 jhgjad ydg cygc yaga gc dci',
            start_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            end_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            price: 1976
        }
    ])

    const columns = isAdmin ? adminRidesColumns : userRidesColumns

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
