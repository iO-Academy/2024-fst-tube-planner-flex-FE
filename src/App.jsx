import { useState, useEffect } from 'react'
import Header from './components/Header'
import LocationSelector from "./components/LocationSelector/index.jsx";
import ResultsDisplay from "./components/ResultsDisplay/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {

    const [stations, setStations] = useState([])

    const fetchStations = async () => {
        const response = await fetch('http://localhost:3000/stations', {mode:'cors'})
        const stationsArray = await response.json()
        setStations(stationsArray.data)
    }

    useEffect(() => {

        fetchStations()

    }, [])

  return (
    <>
        <section >
            <div className='text-center bg-amber-300 py-10'>
                <Header />
                <LocationSelector stations={stations} />
            </div>
            <div className='h-96 bg-amber-100 p-5'>
                <ResultsDisplay />
            </div>
        </section>
        <Footer />

    </>
  )
}

export default App
