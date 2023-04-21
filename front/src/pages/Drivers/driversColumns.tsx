import {
    GridCellParams,
    GridColDef,
    GridValueSetterParams
} from '@mui/x-data-grid'
import style from './Drivers.module.css'
import React, { ReactNode } from 'react'

export const driversColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Driver ID',
        width: 100,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'login',
        headerName: 'Driver Login',
        width: 350,
        editable: false,
        type: 'string'
    },
    {
        field: 'fullname',
        headerName: 'Full Name',
        width: 350,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'rides_link',
        headerName: 'Rides',
        width: 100,
        editable: false,
        renderCell: (): ReactNode => <a href="">rides</a>
    },
    {
        field: 'fines_link',
        headerName: 'Fines',
        width: 100,
        editable: false,
        type: 'any',
        renderCell: (): ReactNode => <a href="">fines</a>,
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'experience',
        headerName: 'Experience',
        width: 100,
        editable: false,
        type: 'number'
    }
]
