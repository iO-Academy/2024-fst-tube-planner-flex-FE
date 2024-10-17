import RouteCard from "../RouteCard/index.jsx";
import {useEffect, useState} from "react";
import PlanRouteButton from "../PlanRouteButton/index.jsx";
import NoRouteCard from "../NoRouteCard/index.jsx";

function ResultsDisplay({fromSelected, destinationSelected, setFromSelected, setDestinationSelected}) {


    const [journey, setJourney] = useState([])
    const [planButtonClicked, setPlanButtonClicked] = useState(false)
    const [status, setStatus] = useState(0)
    const hostURL = 'http://localhost:3000'

    let originCode
    let destinationCode

    if (fromSelected && destinationSelected) {
        originCode = fromSelected
        destinationCode = destinationSelected
    }

    console.log(fromSelected, destinationSelected)

    const fetchJourney = async () => {
        const response = await fetch(`${hostURL}/journeys?origin=${originCode}&destination=${destinationCode}`)
        setStatus(response.status)
        const journeysArray = response.status == 200 ? await response.json() : []
        setJourney(journeysArray.summary)
    }

    useEffect(() => {
        if (fromSelected && destinationSelected) {
            fetchJourney()
        }
    }, [planButtonClicked]);

    return (
        <div className='min-h-96 bg-amber-100 flex p-11 justify-center'>
            <div className='container grid-cols-1  m5'>
                <div className='flex justify-center gap-3 mb-5'>
                    <PlanRouteButton buttonClicked={planButtonClicked} buttonClickedToggle={setPlanButtonClicked}/>
                </div>
                {(journey !== undefined && status) === 200 && <RouteCard journeyInfo={journey}/>}
                {(journey === undefined && status === 204) && <NoRouteCard/>}
            </div>
        </div>
    )
}

export default ResultsDisplay