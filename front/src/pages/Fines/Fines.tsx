import React, { useEffect, useState } from 'react'
import style from '../Rides/Rides.module.css'
import { Button } from '@mui/material'

import {
    DataGrid,
    GridCallbackDetails,
    GridCellParams,
    GridRowsProp,
    MuiEvent
} from '@mui/x-data-grid'
import { finesAdminColumns } from './finesAdminColumns'
import dayjs from 'dayjs'
import { finesUserColumns } from './finesUserColumns'
import { useSelector } from 'react-redux'
import { FineType } from '../../types/FineType'
import { useNavigate } from 'react-router-dom'

const Fines: React.FC = () => {
    const navigate = useNavigate()
    const [selectedRowID, setSelectedRowID] = useState('0')
    const userID = useSelector((state: any) => state.user.idusers)
    const activeDriverID = useSelector(
        (state: any) => state.activeDriver.iddriver
    )

    const isAdmin = !!useSelector((state: any) => state.user.role)
    const fullname = useSelector((state: any) => state.user.full_name)
    const [fines, setFines] = useState(new Array<FineType>())
    const [rows, setRows] = useState<GridRowsProp>([])
    async function loadFinesUser(id: number) {
        const response = await fetch('http://localhost:8080/fines/' + id)
        const json = await response.json()
        console.log(json)
        setFines(json)
        const f = json.map((fine: FineType) => {
            return {
                id: fine.idfine,
                rideid: fine.rideid,
                fine_sum: fine.fine_sum,
                contents: fine.contents,
                is_paid: fine.is_paid ? 'yes' : 'no'
            }
        })
        setRows(f)
    }

    async function loadFinesAdmin() {
        if (activeDriverID) {
            loadFinesUser(activeDriverID)
            return
        } else {
            const response = await fetch('http://localhost:8080/fines/getAll')
            const json = await response.json()
            console.log(json)
            setFines(json)
            const f = json.map((fine: FineType) => {
                return {
                    id: fine.idfine,
                    rideid: fine.rideid,
                    fine_sum: fine.fine_sum,
                    contents: fine.contents,
                    is_paid: fine.is_paid ? 'yes' : 'no'
                }
            })
            setRows(f)
        }
    }

    useEffect(() => {
        isAdmin ? loadFinesAdmin() : loadFinesUser(userID)
    }, [])

    const columns = isAdmin ? finesAdminColumns : finesUserColumns

    function handleCellClick(
        params: GridCellParams,
        event: MuiEvent<React.MouseEvent>,
        details: GridCallbackDetails
    ): void {
        setSelectedRowID(params.id.toString())
    }

    function handleGoBack() {
        isAdmin ? navigate('/startAdmin') : navigate('/startUser')
    }

    async function handleDelete() {
        await fetch('http://localhost:8080/fines/' + selectedRowID, {
            method: 'DELETE'
        })
        isAdmin ? loadFinesAdmin() : loadFinesUser(userID)
    }

    return (
        <div className={style.container}>
            <h4 className={style.name}>
                {isAdmin ? 'MANAGE' : fullname.toUpperCase()} FINES
            </h4>
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
                    onClick={() => handleGoBack()}
                >
                    Go Back
                </Button>

                {isAdmin ? (
                    <div className={style.controls}>
                        <Button
                            disabled={selectedRowID === '0'}
                            variant={'outlined'}
                            onClick={() => handleDelete()}
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

export default Fines
