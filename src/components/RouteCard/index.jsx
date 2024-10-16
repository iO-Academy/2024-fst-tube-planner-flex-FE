function RouteCard({journeyInfo}) {
    console.log('RouteCard log:',journeyInfo)

    return (
        journeyInfo && <div className='container grid-cols-2 flex justify-evenly gap-3 border-2 rounded-3xl shadow'>
            <div>
                <div>

                    <h2>From: {journeyInfo[0].from}</h2>
                    <h2>To: {journeyInfo[0].to}</h2>
                </div>
                <h2>Line: {journeyInfo[0].line}</h2>
            </div>
            <div>
                <h2>Stations: </h2>

                <ul>
                    {(journeyInfo[0].stations).map((station,i) => {
                        return(<li key={i}>{station}</li>)
                    })}

                </ul>

            </div>
        </div>


    )
}

export default RouteCard