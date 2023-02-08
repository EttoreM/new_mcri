/* This context manages the opacity of the map layer */


import { createContext, useState } from 'react'

const DSVisContext = createContext({
  opacity: 0.4,
  lowerFilter: 0,
  upperFilter: 255,
  minValue: 0,
  maxValue: 255,
  updateOpacity: (ds) => { }
})

export const DSVisContextProvider = props => {

  const [opacity, setOpacity] = useState(0.4)
  const [lowerFilter, setLowerFilter] = useState(0)
  const [upperFilter, setUpperFilter] = useState(255)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(255)


  const updateOpacityHandler = value => {
    setOpacity(value)
  }

  const updateLowerFilterHandler = value => {
    setLowerFilter(value)
  }

  const updateUpperFilterHandler = value => {
    setUpperFilter(value)
  }

  const contextValue = {
    opacity: opacity,
    lowerFilter: lowerFilter,
    upperFilter: upperFilter,
    minValue: minValue,
    maxValue: maxValue,
    updateOpacity: updateOpacityHandler,
    updateLowerFilter: updateLowerFilterHandler,
    updateUpperFilter: updateUpperFilterHandler
  }

  return (
    <DSVisContext.Provider value={contextValue}>
      {props.children}
    </DSVisContext.Provider>
  )
}

export default DSVisContext