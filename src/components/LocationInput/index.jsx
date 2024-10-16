
function LocationInput({stations, direction, setSelectedStation, stationCode}) {

    return (
        <select
            className="font-Anton italic bg-amber-100 rounded-3xl p-3 m-9"
            onChange={(e) =>
                setSelectedStation(e.target.value)
        }
        >
            <option>{direction}</option>
                {stations.map((tube) =>
                    (<option key={tube.code + tube.name}>{tube.name + " (" + tube.code + ")"}</option>)
                )}
        </select>
    )
}

export default LocationInput