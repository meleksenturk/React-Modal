import React, { useState} from 'react'
import '../css/Dropdown.css'
import Navbar from '../components/Navbar.jsx'
const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <div onClick={() => setDropdownOpen(!dropdownOpen)}>
                {dropdownOpen ? null : <div className='dropdownMenu' >
                    <hr/>
                    <hr/>
                    <hr/>
                    </div>}

            </div>
            <div>
                {dropdownOpen ? <div>
                    <Navbar dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen}/>
                </div> : null}
            </div>
        </>
    )
}

export default Dropdown