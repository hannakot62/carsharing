import React from 'react'
import style from './Ride.module.css'
import { RideType } from '../../types/RideType'
import dayjs from 'dayjs'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

interface IRide {
    isAdmin: boolean
    ride: RideType
}

const Ride: React.FC<IRide> = (props: IRide) => {
    const { ride, isAdmin } = { ...props }
    return (
        <div className={style.container}>
            <div className={style.info}>
                <h4>Car: {ride.id_car}</h4>
                <div className={style.places}>
                    <h5>From: {ride.start_point}</h5>
                    <h5>To: {ride.end_point}</h5>
                </div>
                <h6 className={style.time}>
                    {dayjs(ride.start_time).format('DD-MM-YYYY HH:mm:ss')} -{' '}
                    {dayjs(ride.end_time).format('DD-MM-YYYY HH:mm:ss')}
                </h6>
                <h4>Total Price: {ride.price}</h4>
            </div>

            {isAdmin ? (
                <div className={style.admin}>
                    <div className={style.controls}>
                        <IconButton aria-label={'edit'}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label={'delete'}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    <div className={style.adminInfo}>
                        <h5>ID ride: {ride.id_ride}</h5>
                        <h5>ID driver: {ride.id_driver}</h5>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Ride
