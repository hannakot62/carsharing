import { GridColDef } from '@mui/x-data-grid'
import style from '../Rides/Rides.module.css'

export const finesUserColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Fine ID',
        width: 100,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },

    {
        field: 'fine_sum',
        headerName: 'Fine Sum',
        width: 150,
        editable: false,
        type: 'string'
    },
    {
        field: 'contents',
        headerName: 'Fine Contents',
        width: 900,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'is_paid',
        headerName: 'Paid',
        width: 100,
        editable: false,
        type: 'string'
    }
]
