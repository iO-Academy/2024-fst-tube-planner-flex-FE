import LocationInput from "../LocationInput/index.jsx";
import PlanRouteButton from "../PlanRouteButton/index.jsx";
import {useState} from "react";

function LocationSelector(stations) {

    const [originStation, setOriginStation] = useState('');
    const [destinationStation, setDestinationStation] = useState('');

    const filteredOriginData = stations.stations.filter(item => item.name + " (" + item.code + ")" !== destinationStation)
    const filteredDestinationData = stations.stations.filter(item => item.name + " (" + item.code + ")" !== originStation)

    return (
            <div className='bg-amber-200 rounded mx-auto'>
                <div className='pt-16 flex-row justify-center w-64'>
                    <LocationInput stations={filteredOriginData} direction="Travelling from" setSelectedStation={setOriginStation}/>
                    <LocationInput stations={filteredDestinationData} direction='Travelling to' setSelectedStation={setDestinationStation} />
                </div>
                <div className='mt-8 '>
                    <PlanRouteButton />
                </div>
            </div>
    )
}

export default LocationSelector