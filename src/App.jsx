import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LocationSelector from "./components/LocationSelector/index.jsx";
import ResultsDisplay from "./components/ResultsDisplay/index.jsx";

function App() {

  return (
    <>
        <section >
            <div className='text-center bg-amber-300 py-36'>
                <Header />
                <LocationSelector />
            </div>
            <div className='bg-cyan-500 rounded'>
                <ResultsDisplay />
            </div>
        </section>

    </>
  )
}

export default App
