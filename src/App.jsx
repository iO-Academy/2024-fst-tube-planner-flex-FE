import { useState, useEffect } from 'react'
import Header from './components/Header'
import LocationSelector from "./components/LocationSelector/index.jsx";
import ResultsDisplay from "./components/ResultsDisplay/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {

    const [stations, setStations] = useState([])
    const [selected, setSelected] = useState(null)
    const [destinationSelected, setDestinationSelected] = useState(null)


    const fetchStations = async () => {
        const response = await fetch('http://localhost:3000/stations')
        const stationsArray = await response.json()
        setStations(stationsArray.data)
    }

    useEffect(() => {
        fetchStations()
    }, [])

    return (
    <>
        <section >
            <div className='bg-amber-300 py-10'>
                <Header />
                <LocationSelector stations={stations}
                                  setSelected={setSelected}
                                  setDestinationSelected={setDestinationSelected}
                                  />

            </div>
            <div className='h-96 bg-amber-100 p-5'>
                <ResultsDisplay selected={selected} destinationSelected={destinationSelected}/>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default App
