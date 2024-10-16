import LocationInput from "../LocationInput/index.jsx";
import PlanRouteButton from "../PlanRouteButton/index.jsx";
import {Link} from "react-router-dom";

function LocationSelector({stations, selected, setSelected, destinationSelected, setDestinationSelected}) {


    return (
        <>
            <div className='bg-amber-200 rounded mx-5'>

                <div className='pt-16 flex justify-evenly'>
                    <LocationInput stations={stations}
                                   selected={selected}
                                   setSelected={setSelected}
                                   destinationSelected={destinationSelected}
                                   setDestinationSelected={setDestinationSelected}/>
                </div>
            </div>

        </>
    )
}

export default LocationSelector