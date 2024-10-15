import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LocationSelector from "./components/LocationSelector/index.jsx";
import ResultsDisplay from "./components/ResultsDisplay/index.jsx";


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
            <div className='border-2 rounded m-2'>
                <ResultsDisplay routes={routes}/>
            </div>
        </section>

    </>
  )
}

export default App
