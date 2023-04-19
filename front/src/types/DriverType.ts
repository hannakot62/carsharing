import { RideType } from './RideType'
import { FineType } from './FineType'

export type DriverType = {
    login: string
    id_driver: string
    fullname: string
    rides: Array<RideType>
    fines: Array<FineType>
    experience: number
}
