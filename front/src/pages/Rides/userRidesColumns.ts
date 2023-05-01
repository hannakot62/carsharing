import style from './Rides.module.css'
import { GridColDef } from '@mui/x-data-grid'

export const userRidesColumns: GridColDef[] = [
    {
        field: 'idcar',
        headerName: 'Car Number',
        width: 100,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'start_point',
        headerName: 'From',
        width: 320,
        editable: false,
        type: 'string'
    },
    {
        field: 'end_point',
        headerName: 'To',
        width: 320,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'start_time',
        headerName: 'Since',
        width: 200,
        editable: false,
        type: 'string'
    },
    {
        field: 'end_time',
        headerName: 'Till',
        width: 200,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 85,
        editable: false,
        type: 'number',
        cellClassName: style.cell,
        headerAlign: 'left'
    }
]
