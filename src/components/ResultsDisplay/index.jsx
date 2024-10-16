import RouteCard from "../RouteCard/index.jsx";
import {useEffect, useState} from "react";
import PlanRouteButton from "../PlanRouteButton/index.jsx";
import NoRouteCard from "../NoRouteCard/index.jsx";
import InvalidInputCard from "../InvalidInputCard/index.jsx";
import {Link, Routes, Route} from "react-router-dom";
import ClearRouteButton from "../ClearRouteButton/index.jsx";

function ResultsDisplay({selected, destinationSelected}) {


    const [journey, setJourney] = useState([])
    const [boolean, setBoolean] = useState(false)
    const [status, setStatus] = useState(0)
    console.log(boolean)
    console.log('selected: ', selected)
    console.log('destinationSelected: ', destinationSelected)

    let originCode
    let destinationCode

    if (selected && destinationSelected) {
        originCode = selected
        destinationCode = destinationSelected
    }


    const fetchJourney = async () => {
        const response = await fetch(`http://localhost:3000/journeys?origin=${originCode}&destination=${destinationCode}`)
        setStatus(response.status)
        let journeysArray
        journeysArray = response.status == 200 ?  await response.json() : []
        setJourney(journeysArray.summary)
    }

console.log(status)
    useEffect(() => {
        fetchJourney()
    }, [boolean]);

console.log('journey log:' ,journey)


    return (
        <div className='container grid-cols-1  m5'>
            <div className='flex justify-center gap-3 mb-5'>
                <Link to={'/journeys'}>
                    <PlanRouteButton  boolean={boolean} setBoolean={setBoolean} />
                </Link>
                <Link to={'/'}>
                    <ClearRouteButton/>
                </Link>
            </div>
            <Routes>
                <Route path={'/journeys'} element={
                    status === 200 && (<RouteCard journeyInfo={journey}/>) ||
                    journey === undefined && (<NoRouteCard/>)||
                    status === 400 && (<InvalidInputCard/>)
                }/>
                <Route path={'/'}/>

            </Routes>



        </div>

    )
}

export default ResultsDisplay