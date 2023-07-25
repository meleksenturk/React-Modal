import React, { useState } from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import '../css/Navbar.css'
import { links } from '../data.jsx'
import { Link } from 'react-router-dom'
const Navbar = ({dropdownOpen ,setDropdownOpen}) => {

  const closeNavbar = () => {
    setDropdownOpen(false)
  }

  return (
    <>
    {dropdownOpen && <div className='navbar'>
      <div className='title'>
        <div>
          <h4>Coding <span className='addict'>Addict</span></h4>
        </div>
        <div>
          <CloseCircleFilled style={{ fontSize: '30px' }} className='closeFilled' onClick={closeNavbar}/>
        </div>
      </div>
      <div className='menu'>
        {links.map((item) => {
          return (
            <Link to={item.url} >
              <div className='item-group'>

                <div className='icon'>{item.icon}</div>
                <div className='text'> <h4>{item.text}</h4> </div>

              </div>
            </Link>
          )
        })}

      </div>
    </div>}
    </>
  )
}

export default Navbar