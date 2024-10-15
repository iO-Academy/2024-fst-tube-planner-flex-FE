import OriginLocationInput from "../OriginLocationInput/index.jsx";
import PlanRouteButton from "../PlanRouteButton/index.jsx";
import DestinationLocationInput from "../DestinationLocationInput/DestinationLocationInput.jsx";
import {useEffect, useState} from "react";

function LocationSelector(stations) {

    const [selected, setSelected] = useState('')

    useEffect(() => {
        console.log('selected is: ' +selected)
    }, [selected]);


        return (
        <>
            <div className='bg-amber-200 rounded mx-5'>

                <div className='pt-16 flex justify-evenly'>
                    <h1 className='font-Anton italic'>Departure:</h1>
                    <OriginLocationInput stations={stations} setSelected={setSelected}/>
                </div>

                {

                }

                <div className='mt-10 flex justify-evenly italic'>
                    <h1 className='font-Anton'>Destination:</h1>
                    <DestinationLocationInput stations={stations} selected={selected}/>
                </div>

                <div className='mt-8 '>
                    <PlanRouteButton />
                </div>

            </div>

        </>
    )
}

export default LocationSelector