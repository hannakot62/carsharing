import {
    GridCellParams,
    GridColDef,
    GridValueSetterParams
} from '@mui/x-data-grid'
import style from './Drivers.module.css'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export const driversColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Driver ID',
        width: 100,
        editable: false,
        type: 'string'
    },
    {
        field: 'fullname',
        headerName: 'Full Name',
        width: 750,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'rides_link',
        headerName: 'Rides',
        width: 120,
        editable: false,
        renderCell: (): ReactNode => <Link to="/rides">rides</Link>
    },
    {
        field: 'fines_link',
        headerName: 'Fines',
        width: 120,
        editable: false,
        type: 'any',
        renderCell: (): ReactNode => <Link to="/fines">fines</Link>,
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
