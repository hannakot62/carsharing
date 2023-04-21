import {
    GridCellParams,
    GridColDef,
    GridValueSetterParams
} from '@mui/x-data-grid'
import style from './Rides.module.css'

export const adminRidesColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'Ride ID',
        width: 80,
        editable: false,
        type: 'string',
        headerClassName: style.gridHeader,
        cellClassName: style.gridColumn
    },
    {
        field: 'id_driver',
        headerName: 'Driver ID',
        width: 80,
        editable: false,
        type: 'string'
    },
    {
        field: 'id_car',
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
        width: 250,
        editable: false,
        type: 'string'
    },
    {
        field: 'end_point',
        headerName: 'To',
        width: 250,
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
