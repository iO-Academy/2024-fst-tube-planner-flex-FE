// eslint-disable-next-line react/prop-types
function DestinationLocationInput({stations, selected}) {

const whatIWantArray = selected.split(', ')
    console.log(whatIWantArray)

    return (
        <div>
            <select className='font-Anton italic bg-amber-100 rounded-3xl p-3'>

                {stations.stations.map((station, i) =>
                    (<option key={i}>{station.code}, {station.name}</option>)
                )}

            </select>

        </div>

    )
}


export default DestinationLocationInput