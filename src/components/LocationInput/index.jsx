import {useState} from "react";
function LocationInput({stations}) {

const [selected, setSelected] = useState(null)

const minusDeparture = stations.stations.filter(function (element) {
    return element !== selected
})

    return (
        <div>
            <select onChange={(e) => {
                const selection = stations.stations.find((x) => x.code === e.target.value)
                setSelected(selection)
            }} className='font-Anton italic bg-amber-100 rounded-3xl p-3 m-9'>
                <option>Travelling from</option>
                {stations.stations.map((station, i) =>
                    (<option value={station.code} key={i}>{station.name} ({station.code})</option>)
                )}
            </select>
            <select className='font-Anton italic bg-amber-100 rounded-3xl p-3 m-9'>
                <option>Travelling to</option>
                {minusDeparture.map((station, i) =>
                    (<option value={station.code} key={i}>{station.name} ({station.code})</option>)
                )}
            </select>
        </div>
)
}

export default LocationInput