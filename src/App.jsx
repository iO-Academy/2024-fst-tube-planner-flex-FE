import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import LocationSelector from "./components/LocationSelector/index.jsx";
import ResultsDisplay from "./components/ResultsDisplay/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {

    const [stations, setStations] = useState()

    const fetchStations = async () => {
        // waiting to hear what the end point is
        const response = await fetch('https://localhost:3000/stations')
        const stationsArray = await response.json()
        setStations(stationsArray)
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
