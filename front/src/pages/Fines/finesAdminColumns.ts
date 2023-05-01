import { GridColDef } from '@mui/x-data-grid'
import style from '../Rides/Rides.module.css'

export const finesAdminColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Fine ID',
        width: 80,
        editable: false,
        type: 'string'
    },
    {
        field: 'idride',
        headerName: 'Ride ID',
        width: 80,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'fine_sum',
        headerName: 'Fine Sum',
        width: 80,
        editable: false,
        type: 'string'
    },
    {
        field: 'contents',
        headerName: 'Fine Contents',
        width: 80,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'is_paid',
        headerName: 'Fine ID',
        width: 80,
        editable: false,
        type: 'string'
    }
]
