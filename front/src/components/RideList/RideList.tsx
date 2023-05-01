import React from 'react'
import { RideType } from '../../types/RideType'
import style from './RideList.module.css'
import Ride from '../Ride/Ride'

interface IRideList {
    isAdmin: boolean
    rides: Array<RideType>
}

const RideList: React.FC<IRideList> = (props: IRideList) => {
    const { rides, isAdmin } = { ...props }
    const ridesToRender = rides.length
        ? rides.map((ride: RideType) => (
              <Ride key={ride.idride} ride={ride} isAdmin={isAdmin} />
          ))
        : 'No rides yet...'
    return <div className={style.container}>{ridesToRender}</div>
}

export default RideList
