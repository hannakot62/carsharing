import SignIn from '../pages/SignIn/SignIn'
import StartUser from '../pages/StartUser/StartUser'
import SignUp from '../pages/SignUp/SignUp'
import Book from '../pages/Book/Book'
import Rent from '../pages/Rent/Rent'
import FinishRide from '../pages/FinishRide/FinishRide'
import StartAdmin from '../pages/StartAdmin/StartAdmin'
import Rides from '../pages/Rides/Rides'
import Fines from '../pages/Fines/Fines'
import Drivers from '../pages/Drivers/Drivers'
import Cars from '../pages/Cars/Cars'
import EditFine from '../pages/EditFine/EditFine'
import AddEditCar from '../pages/AddEditCar/AddEditCar'

export const myRoutes = [
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/startUser', component: StartUser },
    { path: '/book', component: Book },
    { path: '/rent', component: Rent },
    { path: '/finish', component: FinishRide },
    { path: '/startAdmin', component: StartAdmin },
    { path: '/rides', component: Rides },
    { path: '/fines', component: Fines },
    { path: '/drivers', component: Drivers },
    { path: '/cars', component: Cars },
    { path: '/editFine', component: EditFine },
    { path: '/addCar', component: AddEditCar },
    { path: '/editCar', component: AddEditCar },
    { path: '/finishRide', component: FinishRide }
]
