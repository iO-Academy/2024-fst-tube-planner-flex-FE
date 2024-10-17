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
        let result = minutes + " Minutes " + seconds + " Seconds"
        return result }

    return (
        journeyInfo && journeyInfo.length > 0 &&
        <div className='container grid-cols-2 flex justify-evenly gap-3 border-2 rounded-2xl shadow'>
            <div className='font-Anton'>
                <div>
                    <h2>From: {journeyInfo[0].from}</h2>
                    <h2>To: {journeyInfo[0].to}</h2>
                </div>
                <h2>Line: {(journeyInfo[0].line.replaceAll('_', ' '))}</h2>
                <h2>Time: {timeConversion(journeyInfo[0].time)}</h2>
            </div>
            <div className='font-Anton'>
                <h2>Stops: {journeyInfo[0].stations.length} - <button onClick={clickHandler}>show more</button></h2>

                {showMore && (<ul className='text-sm'>
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