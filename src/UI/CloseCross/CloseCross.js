import React from 'react'
import classes from './CloseCross.module.css'


const CloseCross = props => {

  const handleClose = e => {
    // props.onClick()
  }

  return (
    <div
      className={classes.CloseNavBar}
     
      onClick={e => handleClose(e)}
    >
      <img
        className={classes.closeIcon}
        src={require('../../imgs/close.svg').default}
      />
    </div>
  )
}

export default CloseCross