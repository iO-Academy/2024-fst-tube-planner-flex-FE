function ClearRouteButton({setFromSelected, setDestinationSelected}) {

    const clickHandler = () => {
        setFromSelected('')
        setDestinationSelected('')
    }

    return (
        <a href='#'><button onClick={clickHandler}  className='font-Anton italic text-2xl border-2 border-red-700 rounded-3xl p-2 active:bg-amber-50'>Clear
            Route</button></a>
    )
}

export default ClearRouteButton