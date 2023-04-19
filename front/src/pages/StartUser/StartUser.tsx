import React from 'react'
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
const StartUser: React.FC = () => {
    const fullname = 'Anna Kotyagova'
    const cars = [
        {
            id_car: '1',
            model: 'shkoda',
            location: 'surhanova 28',
            experience_start: 0,
            price_per_minute: 0.5
        },
        {
            id_car: '2',
            model: 'shkod sdsdf a',
            location: 'surhanova 28',
            experience_start: 0,
            price_per_minute: 0.5
        }
    ]
    return (
        <div className={style.container}>
            <div className={style.left}>
                <h2>{fullname}</h2>
                <h3>Rides</h3>
                <h3>Fines</h3>
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
                <CarList isAdmin={false} cars={cars} />
            </div>
        </div>
    )
}

export default StartUser
