import React from 'react'
import style from './Rides.module.css'
import { Button } from '@mui/material'
import { DataGrid, GridRowsProp } from '@mui/x-data-grid'
import { adminRidesColumns } from './adminRidesColumns'
import dayjs from 'dayjs'
import { userRidesColumns } from './userRidesColumns'

const Rides: React.FC = () => {
    const isAdmin = true

    //todo user and their role
    //тавить ride id в id, форматировать дату в строку
    const columns = isAdmin ? adminRidesColumns : userRidesColumns
    const fullname = 'hannakot'
    const rows: GridRowsProp = [
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
            id: '134',
            id_driver: '42',
            id_car: '877771',
            start_point: 'kolasa 28',
            end_point: 'hikalo 9 jhgjad ydg cygc yaga gc dci',
            start_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            end_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            price: 1976
        },
        {
            id: '324',
            id_driver: '42',
            id_car: '871',
            start_point: 'kolasa 28',
            end_point: 'hikalo 9 jhgjad ydg cygc yaga gc dci',
            start_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            end_time: dayjs('2023-01-24').format('DD/MM/YYYY-HH:mm:ss'),
            price: 1976
        }
    ]

    return (
        <div className={style.container}>
            <h4 className={style.name}>{isAdmin ? 'all' : fullname} rides</h4>
            <div className={style.gridContainer}>
                <DataGrid columns={columns} rows={rows} />
            </div>

            <Button
                sx={{ position: 'fixed' }}
                size={'large'}
                className={style.btn}
                variant={'contained'}
            >
                Go Back
            </Button>
        </div>
    )
}

export default Rides
