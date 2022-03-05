import React from 'react'

const Booking = () => {
    return (
        <div>
            <div className='booking_page'>
                <div>{localStorage.getItem("name")}</div>
                <div>{localStorage.getItem("Language")}</div>
                <div>{localStorage.getItem("Runtime")}</div>
            </div>
        </div>

    )
}

export default Booking