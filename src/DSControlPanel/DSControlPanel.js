import React, {useState, useEffect, useContext} from 'react'
import DatasetSlider from '../DSSlider/DSSlider'
import DSContext from '../store/DS-Sel-context'
import classes from './DSControlPanel.module.css'

const DSControlPanel = props => {

  const DSCtx = useContext(DSContext)

  const DSSelected = Object.keys(DSCtx.DS).map(ds =>  {return (<DatasetSlider key= {ds} DatasetName={ds} />)})

  return (
    <div className={classes.ControlPanel} >
      {DSSelected}
    </div>
  )

}

export default DSControlPanel