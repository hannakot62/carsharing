import React, { useState } from 'react'
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
const StartUser: React.FC = () => {
    const fullname = 'Anna Kotyagova'
    const [selectedCarID, setSelectedCarID] = useState('')
    const cars = [
        {
            id_car: '0708 KI-4',
            model: 'Shkoda Octavia',
            location: 'Surhanova 28',
            experience_start: 0,
            price_per_minute: 0.53
        },
        {
            id_car: '2990 AM-7',
            model: 'Volkswagen Polo',
            location: 'Kolasa 8',
            experience_start: 1,
            price_per_minute: 0.5
        },
        {
            id_car: '4697 OO-7',
            model: 'Volkswagen Polo',
            location: 'Bogdanovicha 3',
            experience_start: 1,
            price_per_minute: 0.5
        },
        {
            id_car: '6753 PP-3',
            model: 'KIA Rio',
            location: 'Gikalo 9',
            experience_start: 2,
            price_per_minute: 0.52
        }
    ]
    function handleClick(target: any) {
        const id =
            target.childNodes[0].childNodes[0].childNodes[1].nextSibling
                .innerText
        setSelectedCarID(id)
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <h2>{fullname}</h2>
                <h3>
                    <a href={''}>Rides</a>
                </h3>
                <h3>
                    <a href={''}>Fines</a>
                </h3>
            </div>
            <main>
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
