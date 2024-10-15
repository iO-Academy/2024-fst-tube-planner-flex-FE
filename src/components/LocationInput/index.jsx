function LocationInput({stations, selected, setSelected, destinationSelected, setDestinationSelected}) {

console.log(selected)
console.log(destinationSelected)
const minusDeparture = stations.stations.filter(function (element) {
    return element !== selected
})

    return (
        <div>
            <select className='font-Anton italic bg-amber-100 rounded-3xl p-3 m-9'
                onChange={(e) => {
                const selection = stations.stations.find((x) => x.code === e.target.value)
                setSelected(selection)
            }} >
                <option>Travelling from</option>
                {stations.stations.map((station, i) =>
                    (<option value={station.code} key={i}>{station.name} ({station.code})</option>)
                )}
            </select>

            <select className='font-Anton italic bg-amber-100 rounded-3xl p-3 m-9'
            onChange={(e) => {
                const destinationSelected = stations.stations.find((x) => x.code === e.target.value)
                setDestinationSelected(destinationSelected)
            }}>
                <option>Travelling to</option>
                {minusDeparture.map((station, i) =>
                    (<option value={station.code} key={i}>{station.name} ({station.code})</option>)
                )}
            </select>
        </div>
)
}

export default LocationInput