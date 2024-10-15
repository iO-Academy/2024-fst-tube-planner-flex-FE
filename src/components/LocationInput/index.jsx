function LocationInput({stations}) {
    console.log(stations)
    stations.stations.map((station) => {
        console.log(station)
    })
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


export default LocationInput