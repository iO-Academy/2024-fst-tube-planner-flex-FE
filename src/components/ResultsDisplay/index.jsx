import RouteCard from "../RouteCard/index.jsx";
import {Routes, Route} from 'react-router-dom';
function ResultsDisplay() {
    // map routes
    return (
        <div className='container grid-cols-1  m5'>
            <Routes>
                <Route path={'/routeDisplay'} element={<RouteCard />}/>
            </Routes>
        </div>

    )
}

export default ResultsDisplay