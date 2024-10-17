function RouteCard({journeyInfo}) {

    return (
        journeyInfo && journeyInfo.length > 0 &&
        <div className='container grid-cols-2 flex justify-evenly gap-3 border-2 rounded-3xl shadow'>
            <div className='font-Anton'>
                <div>
                    <h2>From: {journeyInfo[0].from}</h2>
                    <h2>To: {journeyInfo[0].to}</h2>
                </div>
                <h2>Line: {(journeyInfo[0].line.replaceAll('_', ' '))}</h2>
            </div>
            <div className='font-Anton'>
                <h2>Stops: {journeyInfo[0].stations.length}</h2>
                <ul>
                    {(journeyInfo[0].stations).map((station, i) => {
                        return (<li className='list-disc' key={i}>{station}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RouteCard