/* This context manages the list or datasets names 
 * that have been selected by the user for possible
 * future visualisation */


import { createContext, useState } from 'react'

const DSSelContext = createContext({
  DS: {},
  addDS: (ds) => { },
  removeDS: (ds) => { },
  updateDS: (ds) => { }
})

export const DSSelContextProvider = props => {

  const [DS, setDS] = useState({})
  // const [DSList, setDSList] = useState([])


  const addHandler = ds => {
    if (!(ds in DS)) {
      let DS1 = { ...DS }
      DS1[ds] = {
        opacity: 0.4,
        lowerFilter: 0,
        upperFilter: 255,
        minValue: 0,
        maxValue: 255
      }
      setDS(DS1)
    }
  }

  const removeHandler = ds => {
    if (ds in DS) {
      let DS1 = { ...DS }
      delete DS1[ds]
      setDS(DS1)
    }
  }

  const updateHandler = dss => {
    dss.forEach(ds => {
      if (!(ds in DS)) addHandler(ds)
      for (let key in DS) {
        if (!dss.includes(key)) removeHandler(key)
      }
    })
  }

  const updateOpacityHandler = (ds, opacity) => {
    if (ds in DS) {
      let DS1 = {...DS}
      DS1[ds].opacity = opacity
      setDS(DS1)
    }
  }

  const updateLowerFilterHandler = (ds, lowerFilter) => {
    if (ds in DS) {
      let DS1 = {...DS}
      DS1[ds].lowerFilter = lowerFilter
      setDS(DS1)
    }
  }

  const updateUpperFilterHandler = (ds, upperFilter) => {
    if (ds in DS) {
      let DS1 = {...DS}
      DS1[ds].upperFilter = upperFilter
      setDS(DS1)
    }
  }

  const contextValue = {
    DS: DS,
    addDS: addHandler,
    removeDS: removeHandler,
    updateDS: updateHandler,
    updateOpacity: updateOpacityHandler,
    updateLowerFilter: updateLowerFilterHandler,
    updateUpperFilter: updateUpperFilterHandler
  }

  return (
    <DSSelContext.Provider value={contextValue}>
      {props.children}
    </DSSelContext.Provider>
  )
}

export default DSSelContext