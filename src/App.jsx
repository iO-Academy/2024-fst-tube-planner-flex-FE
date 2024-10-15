import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LocationSelector from "./components/LocationSelector/index.jsx";
import ResultsDisplay from "./components/ResultsDisplay/index.jsx";
import Footer from "./components/Footer/index.jsx";


let stations = 'stations'

let routes =  'routes'

function App() {

  return (
    <>
        <section >
            <div className='text-center bg-amber-300 py-10'>
                <Header />
                <LocationSelector stations={stations} />
            </div>
            <div className='h-96 bg-amber-100 p-5'>
                <ResultsDisplay routes={routes}/>
            </div>
        </section>
        <Footer />

    </>
  )
}

export default App
