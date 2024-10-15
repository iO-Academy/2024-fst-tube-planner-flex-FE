import LocationInput from "../LocationInput/index.jsx";
import PlanRouteButton from "../PlanRouteButton/index.jsx";

function LocationSelector(stations) {
    return (
        <>
            <div className='bg-amber-200 rounded mx-5'>

                <div className='pt-16 flex justify-evenly'>
                    {/*<h1 className='font-Anton italic'>Departure:</h1>*/}
                    <LocationInput stations={stations}/>
                </div>

                {/*<div className='mt-10 flex justify-evenly italic'>*/}
                {/*    <h1 className='font-Anton'>Destination:</h1>*/}
                {/*    <LocationInput stations={stations}/>*/}
                {/*</div>*/}

                {/*<div className='mt-8 '>*/}
                    <PlanRouteButton />
                {/*</div>*/}

            </div>

        </>
    )
}

export default LocationSelector