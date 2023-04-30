import React, { useEffect, useState } from 'react'
import style from './StartUser.module.css'
import CarList from '../../components/CarList/CarList'
import {
    // interaction,
    layer,
    // custom,
    control, //name spaces
    // Interactions,
    Overlays,
    Controls, //group
    Map,
    Layers
    // Overlay,
    // Util //objects
} from 'react-openlayers'
import { Button } from '@mui/material'
import { CarType } from '../../types/CarType'
import { useDispatch, useSelector } from 'react-redux'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from '../../store/slices/userSlice'

const StartUser: React.FC = () => {
    const [selectedCarID, setSelectedCarID] = useState('')
    const [cars, setCars] = useState(new Array<CarType>())
    const fullname = useSelector((state: any) => state.user.full_name)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function loadCars() {
        const response = await fetch('http://localhost:8080/cars/getAll')
        const json = await response.json()
        setCars(json)
    }

    useEffect(() => {
        loadCars()
    }, [])

    function handleClick(target: any) {
        const id =
            target.childNodes[0].childNodes[0].childNodes[1].nextSibling
                .innerText
        setSelectedCarID(id)
    }

    function handleLogOut() {
        dispatch(removeUser())
        navigate('/signin')
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <h2 className={style.name}>{fullname}</h2>
                <div className={style.info}>
                    <h3>
                        <Link to="/rides">Rides</Link>
                    </h3>
                    <h3>
                        <Link to="/fines">Fines</Link>
                    </h3>
                    <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleLogOut()}
                    >
                        log out
                    </Button>
                </div>
                <footer>
                    <h3 className={style.title}>Contact Us:</h3>
                    <div className={style.links}>
                        <a href="https://github.com/hannakot62" target="blank">
                            <GitHubIcon
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                        <a href="https://t.me/hannakot62" target="blank">
                            <TelegramIcon
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/hannakot62/"
                            target="blank"
                        >
                            <InstagramIcon
                                style={{ width: '40px', height: '40px' }}
                            />
                        </a>
                    </div>
                </footer>
            </div>
            <main className={style.main}>
                <h1>Available Cars</h1>
                <hr />
                <div className={style.mapContainer}>
                    <Map view={{ center: [27, 53], zoom: 5 }}>
                        <Layers>
                            <layer.Tile />
                            <layer.Vector
                            // source={markers}
                            // style={markers.style}
                            // zIndex="1"
                            />
                        </Layers>
                        <Overlays>
                            {/*<Overlay*/}
                            {/*    ref={comp:any => (this.overlayComp = comp)}*/}
                            {/*    element="#popup"*/}
                            {/*/>*/}
                        </Overlays>
                        <Controls attribution={false} zoom={true}>
                            <control.Rotate />
                            <control.ScaleLine />
                            <control.FullScreen />
                            <control.OverviewMap />
                            <control.ZoomSlider />
                            <control.ZoomToExtent />
                            <control.Zoom />
                        </Controls>
                        {/*<Interactions>*/}
                        {/*    <interaction.Select style={selectedMarkerStyle} />*/}
                        {/*    <interaction.Draw source={markers} type="Point" />*/}
                        {/*    <interaction.Modify features={markers.features} />*/}
                        {/*</Interactions>*/}
                    </Map>
                </div>
            </main>
            <div className={style.right}>
                <CarList
                    isAdmin={false}
                    cars={cars}
                    onClick={event => handleClick(event.currentTarget)}
                    selectedCar={selectedCarID}
                />
                <Button
                    size={'large'}
                    className={style.book}
                    sx={{ position: 'fixed' }}
                    variant={'contained'}
                >
                    Book
                </Button>
            </div>
        </div>
    )
}

export default StartUser
