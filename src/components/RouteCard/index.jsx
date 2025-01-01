import {useState} from "react";

function RouteCard({journeyInfo}) {
    const [showMore, setShowMore] = useState(false)
    const clickHandler = () => {
        setShowMore(!showMore)
    }

    const  timeConversion = (time) => {
        let minutes = Math.floor(time/60)
        let seconds = time % 60
        let result = minutes + ":" + (seconds < 10 ? seconds + '0': seconds) + " mins"
        return result }

    return (
        journeyInfo &&
        <div className='container grid-cols-1 flex justify-evenly gap-3 my-1 border-2 border-red-700 p-5 rounded-2xl shadow'
        role='region' aria-labelledby='journey-info'>
            <h2 id='journey-info' className='font-Anton'>Journey Information</h2>
            <div className='font-Anton'>
                <div>
                    <h2>From: {journeyInfo.from}</h2>
                    <h2>To: {journeyInfo.to}</h2>
                </div>
                <h2>Line: {(journeyInfo.line.replaceAll('_', ' '))}</h2>
                <h2>Time: {timeConversion(journeyInfo.time)}</h2>
                <h2>Cost: £{journeyInfo.cost}</h2>

            </div>
            <div className='font-Anton'>
                <h2>Stops: {journeyInfo.stations.length} -
                    <button aria-expanded='showMore'
                      aria-controls='station-list'
                      className='border-dotted border-2 border-red-300 rounded' onClick={clickHandler}>{showMore === false ? 'show more' : 'show less'}</button></h2>
                {showMore && <ul className='text-sm' id='station-list' aria-label='List of stations'>
                    {(journeyInfo.stations).map((station, i) => {
                        if (journeyInfo.stations.length-1 > i) {
                            return (
                                <li className='list-disc'
                                    key={i}>{station[0] + ' - ' + timeConversion(station[1])}</li>)
                        } else {
                            return (
                                <li className='list-disc' key={i}>{station[0] + ' - Final Destination'}</li>)
                        }
                    }
                    )}
                </ul>}
            </div>
        </div>
    )
}

export default RouteCard