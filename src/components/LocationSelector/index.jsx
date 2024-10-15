import LocationInput from "../LocationInput/index.jsx";
import PlanRouteButton from "../PlanRouteButton/index.jsx";

function LocationSelector(stations) {
    return (
        <>
            <div className='bg-amber-200 rounded mx-5'>
                <div className='mt-2 pt-16'>
                    <h1 className='font-sans'>Departure:</h1>
                    <LocationInput stations={stations}/>
                </div>
                <div className='mt-10'>
                    <h1 className='font-sans'>Destination:</h1>
                    <LocationInput stations={stations}/>
                </div>
                <div className='mt-10'>
                    <PlanRouteButton />
                </div>
            </div>

        </>
    )
}

export default LocationSelector