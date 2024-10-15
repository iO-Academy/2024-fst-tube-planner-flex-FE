function RouteCard() {
    return (
        <div className='container grid-cols-2 flex justify-evenly gap-3 border-2 rounded-3xl shadow'>
            <div>
                <div>
                    <h2>From: One place</h2>
                    <h2>To: another</h2>
                </div>
                <h2>Cost: £5</h2>
                <h2>Line: Central</h2>
            </div>
            <div>
                <h2>Stations: </h2>
                <ul>
                    <li>Here</li>
                    <li>and here</li>
                    <li>and here</li>
                    <li>and here</li>
                    <li>also here</li>
                </ul>

            </div>
        </div>


    )
}

export default RouteCard