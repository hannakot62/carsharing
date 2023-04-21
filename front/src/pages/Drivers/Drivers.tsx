import React, { useState } from 'react'
import {
    DataGrid,
    GridCallbackDetails,
    GridCellParams,
    GridRowsProp,
    MuiEvent
} from '@mui/x-data-grid'
import style from './Drivers.module.css'
import { Button } from '@mui/material'
import { driversColumns } from './driversColumns'

const Drivers: React.FC = () => {
    const [selectedRowID, setSelectedRowID] = useState('0')
    console.log(selectedRowID)

    //todo тавить driver id в id, форматировать дату в строку

    const [rows, setRows] = useState<GridRowsProp>([
        {
            id: '1',
            fullname: 'karina arina',
            login: 'jjj',
            // rides: <a>rides</a>,
            fines: <a>fines</a>,
            experience: 2
        }
    ])

    function handleCellClick(
        params: GridCellParams,
        event: MuiEvent<React.MouseEvent>,
        details: GridCallbackDetails
    ): void {
        setSelectedRowID(params.id.toString())
    }

    return (
        <div className={style.container}>
            <h4 className={style.name}>manage drivers</h4>
            <div className={style.gridContainer}>
                <DataGrid
                    columns={driversColumns}
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
            </div>
        </div>
    )
}

export default Drivers
