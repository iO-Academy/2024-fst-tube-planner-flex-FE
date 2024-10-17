import {useState} from "react";

function RouteCard({journeyInfo}) {
    const [showMore, setShowMore] = useState(false)
    const clickHandler = () => {
        if (showMore === false) {
            setShowMore(true)
        }else {
            setShowMore(false)
        }
    }
    const  timeConversion = (time) => {
        let minutes = Math.floor(time/60)
        let seconds = time % 60
        let result = minutes + ":" + (seconds < 10 ? seconds + '0': seconds) + " mins"
        return result }

    return (
        journeyInfo && journeyInfo.length > 0 &&

        <div className='container grid-cols-1 flex justify-evenly gap-3 border-2 p-5 rounded-2xl shadow'
        role='region' aria-labelledby='journey-info'>
            <h2 id={'journey-info'} className='font-Anton'>Journey Information</h2>
            <div className='font-Anton'>
                <div>
                    <h2>From: {journeyInfo[0].from}</h2>
                    <h2>To: {journeyInfo[0].to}</h2>
                </div>
                <h2>Line: {(journeyInfo[0].line.replaceAll('_', ' '))}</h2>
                <h2>Time: {timeConversion(journeyInfo[0].time)}</h2>
            </div>
            <div className='font-Anton'>
                <h2>Stops: {journeyInfo[0].stations.length} - <button aria-expanded='showMore' aria-controls='station-list' className='border-dotted border-2 border-red-300 rounded' onClick={clickHandler}>{showMore === false ? 'show more' : 'show less'}</button></h2>
                {showMore && (<ul className='text-sm' id='station-list' aria-label='List of stations'>
                    {(journeyInfo[0].stations).map((station, i) => {
                        return (
                            <li className='list-disc' key={i}>{station[0] + ' - ' + timeConversion(station[1])}</li>)
                    })}
                </ul>)}
            </div>
        </div>
    )
}

export default RouteCard