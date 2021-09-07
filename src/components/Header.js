import React from 'react'
import { IoMdMenu } from 'react-icons/io'

const Header = () => {
    return ( 
      <div className="header d-flex gradient-45deg-indigo-purple">
        <div className="header-left d-flex plr-15">
          <div className="logo-wrapper">
            <h2 className="h2">AETNA</h2>
          </div>
          <div className="leftmenu-icon">
            <IoMdMenu className="icon" />
          </div>
        </div>
        <div className="header-right d-flex plr-15">
          <p></p>
        </div>
      </div>
    )
}

export default Header
