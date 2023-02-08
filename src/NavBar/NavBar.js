import React, { useState, useEffect } from 'react'
import classes from './NavBar.module.css'
import DSControlPanel from '../DSControlPanel/DSControlPanel'
import SelectDS from '../SelectDS/SelectDS'


const NavBar = () => {

  const logo = require('../imgs/mcri_logo.svg').default

  return (
    <div className={classes.NavBar}>

      <div className={classes.Logo} ><img src={logo} 
      style={{width: '5rem', height: '5rem' }}
      /></div>

      <SelectDS />

      <DSControlPanel />

    </div>
  )
}

export default NavBar