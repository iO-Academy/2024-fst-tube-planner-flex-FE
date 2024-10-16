import RouteCard from "../RouteCard/index.jsx";
import NoRouteCard from "../NoRouteCard/index.jsx";
import InvalidInputCard from "../InvalidInputCard/index.jsx";
import {useEffect, useState} from "react";
import PlanRouteButton from "../PlanRouteButton/index.jsx";

function ResultsDisplay({selected, destinationSelected}) {


    const [journey, setJourney] = useState([])
    const [boolean, setBoolean] = useState(false)
    const [status, setStatus] = useState(0)
    console.log(boolean)

    let originCode
    let destinationCode

    if (selected && destinationSelected) {
        originCode = selected.code
        destinationCode = destinationSelected.code
    }


    const fetchJourney = async () => {
        const response = await fetch(`http://localhost:3000/journeys?origin=${originCode}&destination=${destinationCode}`)
        setStatus(response.status)

        let journeysArray
        status === 200 ? journeysArray = await response.json() : journeysArray = []
        setJourney(journeysArray.summary)
    }

console.log(status)
    useEffect(() => {
        fetchJourney()

    }, [boolean]);




    return (
        <div className='container grid-cols-1  m5'>
            <div className='flex justify-center mb-5'>
                <PlanRouteButton boolean={boolean} setBoolean={setBoolean} />
            </div>

            {status === 200 && (<RouteCard journeyInfo={journey}/>)}
            {status === 204 && (<NoRouteCard/>)}
            {status === 400 && (<InvalidInputCard/>)}

        </div>

    )
}

export default ResultsDisplay