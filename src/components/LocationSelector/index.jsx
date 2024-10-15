import LocationInput from "../LocationInput/index.jsx";
import PlanRouteButton from "../PlanRouteButton/index.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";

function LocationSelector(stations) {
    // Moved state up here, but it might be worth moving up to app so that Results Display can use it,
    // or we work out React Routing!
    const [selected, setSelected] = useState(null)
    const [destinationSelected, setDestinationSelected] = useState(null)

    return (
        <>
            <div className='bg-amber-200 rounded mx-5'>

                <div className='pt-16 flex justify-evenly'>
                    <LocationInput stations={stations} selected={selected} setSelected={setSelected} destinationSelected={destinationSelected} setDestinationSelected={setDestinationSelected}/>
                </div>


                    <Link to={'/routeDisplay'}>
                        <PlanRouteButton />
                    </Link>


            </div>

        </>
    )
}

export default LocationSelector