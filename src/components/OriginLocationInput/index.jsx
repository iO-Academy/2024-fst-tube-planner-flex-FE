// eslint-disable-next-line react/prop-types
function OriginLocationInput({stations, setSelected}) {

const handleChange = (event) => {
    const selectedCode = event.target.value
    setSelected(selectedCode)
}


    return (
       <div>
           <select className='font-Anton italic bg-amber-100 rounded-3xl p-3'
           onChange={handleChange}>

               {stations.stations.map((station, i) =>

                   (<option key={i}>{i}, {station.code}, {station.name}</option>)
               )}

           </select>

       </div>

    )
}


export default OriginLocationInput