function LocationInput({stations}) {
    return (
       <div>
           <select className='font-Anton italic bg-amber-100 rounded-3xl p-3'>
               {console.log(stations.stations)}
               {/*{stations.map((station, i) => (*/}
               {/*    <option key={i}>{station.code}</option>*/}
               {/*))}*/}
               <option className='font-Anton italic'>Station 1</option>
               <option>Station 2</option>
               <option>Station 3</option>
               <option>Station 4</option>
               <option>Station 5</option>
               <option>Station 6</option>
           </select>

       </div>

    )
}


export default LocationInput