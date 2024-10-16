import RouteCard from "../RouteCard/index.jsx";
import NoRouteCard from "../NoRouteCard/index.jsx";
import InvalidInputCard from "../InvalidInputCard/index.jsx";
import {Routes, Route} from 'react-router-dom';
function ResultsDisplay() {
    // map routes

    const statusCode = 400

    return (
        <div className='container grid-cols-1  m5'>
            <Routes>
                <Route path={'/journeys'} element={
                    (statusCode === 200 && <RouteCard/>) ||
                    (statusCode === 204 && <NoRouteCard/>) ||
                    (statusCode === 400 && <InvalidInputCard />)
                }/>
            </Routes>
        </div>

    )
}

export default ResultsDisplay