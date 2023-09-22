import React from 'react'
import '../components/Under.css'
import { Link } from "react-router-dom"

const Under = () => {
    return (
        <> <div className='Under'>
            <div className='btn-gotohome'>
                <Link to="/">Home</Link>
            </div>
        </div></>

    )
}

export default Under