import LocationInput from "../LocationInput/index.jsx";
import PlanRouteButton from "../PlanRouteButton/index.jsx";

function LocationSelector() {
    return (
        <>
            <div className='mt-20'>
                <h1>Departure:</h1>
                <LocationInput />
            </div>
            <div className='mt-20'>
                <h1>Destination:</h1>
                <LocationInput />
            </div>
            <div className='mt-10'>
                <PlanRouteButton />
            </div>

        </>
    )
}

export default LocationSelector