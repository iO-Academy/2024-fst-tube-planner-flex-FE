function PlanRouteButton({buttonClicked, buttonClickedToggle}) {

    const clickHandler = () => {
        if (buttonClicked === true) {
            buttonClickedToggle(false)
        } else {
            buttonClickedToggle(true)
        }
    }
    return (

            <button onClick={clickHandler}
                    className='font-Anton italic text-2xl border-2 border-red-700 rounded-3xl p-2 active:bg-amber-50'>Plan
                Route
            </button>

    )
}

export default PlanRouteButton