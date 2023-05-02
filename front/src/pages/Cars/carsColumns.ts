import {
    GridCellParams,
    GridColDef,
    GridValueSetterParams
} from '@mui/x-data-grid'
import style from '../Drivers/Drivers.module.css'
import React from 'react'

export const carsColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Car Number',
        width: 100,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'model',
        headerName: 'Car Model',
        width: 300,
        editable: false,
        type: 'string'
    },
    {
        field: 'location',
        headerName: 'Car Location',
        type: 'string',
        width: 420,
        editable: false,
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'experience_start',
        headerName: 'Available experince',
        width: 140,
        editable: false,
        type: 'number'
    },
    {
        field: 'price_per_minute',
        headerName: 'Price per Minute',
        width: 130,
        editable: false,
        type: 'number',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'available',
        headerName: 'Available now',
        width: 100,
        editable: false,
        type: 'string'
    }
]
