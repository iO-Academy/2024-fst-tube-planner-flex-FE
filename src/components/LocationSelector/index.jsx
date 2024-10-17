import LocationInput from "../LocationInput/index.jsx";
import {useEffect, useState} from "react";

function LocationSelector({stations, setSelected, setDestinationSelected}) {
    const [originStation, setOriginStation] = useState('');
    const [destinationStation, setDestinationStation] = useState('');
    const filteredOriginData = stations.filter(item => item.name + " (" + item.code + ")" !== destinationStation)
    const filteredDestinationData = stations.filter(item => item.name + " (" + item.code + ")" !== originStation)

    const codeExtractor = (stationDetails) => {
        const stationDetailsArray = stationDetails.split(' ')
        const rawStationCode = stationDetailsArray[stationDetailsArray.length - 1].slice(0, -1)
        const stationCode = rawStationCode.slice(1)
        return stationCode
    }

    useEffect(() => {
        if (originStation) {
            setSelected(codeExtractor(originStation))
        }
    }, [originStation]);

    useEffect(() => {
        if (destinationStation) {
            setDestinationSelected(codeExtractor(destinationStation))
        }
    }, [destinationStation]);

    return (
        <>
            <div className='bg-amber-200 rounded mx-5 '>

                <div className='pt-16 flex flex-col justify-center md:flex-row'>
                    <LocationInput
                        stations={filteredOriginData}
                        directionPlaceholder='Travelling from'
                        setSelectedStation={setOriginStation}
                    />

                    <LocationInput
                        stations={filteredDestinationData}
                        directionPlaceholder='Travelling to'
                        setSelectedStation={setDestinationStation}
                    />

                </div>
            </div>
        </>
    )
}

export default LocationSelector