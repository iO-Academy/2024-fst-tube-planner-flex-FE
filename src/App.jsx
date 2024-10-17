import {useState, useEffect} from 'react'
import Header from './components/Header'
import LocationSelector from "./components/LocationSelector/index.jsx";
import ResultsDisplay from "./components/ResultsDisplay/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {




    const [stations, setStations] = useState([])
    const [fromSelected, setFromSelected] = useState()
    const [destinationSelected, setDestinationSelected] = useState()
    const fetchStationsUrl = 'http://localhost:3000/stations'

    const fetchStations = async () => {
        const response = await fetch(fetchStationsUrl)
        const stationsArray = await response.json()
        setStations(stationsArray.data)
    }

    useEffect(() => {
        fetchStations()
    }, [])

    return (
        <>
                <div className='bg-amber-300 py-10'>
                    <Header/>
                    <LocationSelector stations={stations}
                                      setSelected={setFromSelected}
                                      setDestinationSelected={setDestinationSelected}
                    />
                </div>
                <div className='min-h-96 bg-amber-100 flex p-11 justify-center'>
                    <ResultsDisplay fromSelected={fromSelected} destinationSelected={destinationSelected} setFromSelected={setFromSelected} setDestinationSelected={setDestinationSelected}/>
                </div>
            <Footer/>
        </>
    )
}

export default App
