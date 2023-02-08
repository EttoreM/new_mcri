import React, { useContext, useEffect, useState } from 'react'
import Map, { Source, Layer, GeolocateControl, NavigationControl, ScaleControl } from 'react-map-gl'
import classes from './MainContent.module.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import DSSelContext from '../store/DS-Sel-context'


const MainContent = (props) => {

  const DSSelCtx = useContext(DSSelContext)

  let geojson = require("../lad_very_small.json")

  geojson.features.forEach(f => {
    // Object.keys(DSSelCtx.DS).forEach(ds =>
      f.properties['Dataset1'] = Math.floor(Math.random() * 255)
      f.properties['Dataset2'] = Math.floor(Math.random() * 255)
    // )
  })

  // useEffect(() => {
  //   geojson && geojson.features.forEach(f => {
  //     Object.keys(DSSelCtx.DS).forEach(ds =>
  //       f.properties[ds] = Math.floor(Math.random() * 255)
  //     )
  //   })
  //   console.log(geojson.features[0].properties)
  // }, [Object.keys(DSSelCtx.DS)])

  const layerStyle = Object.keys(DSSelCtx.DS).length && {
    id: 'my-data', //Object.keys(DSSelCtx.DS)[0],
    source: 'my-data', //Object.keys(DSSelCtx.DS)[0],
    type: 'fill',
    filter: [
      'all',
      ['>=', ['get', Object.keys(DSSelCtx.DS)[0]], DSSelCtx.DS[Object.keys(DSSelCtx.DS)[0]].lowerFilter],
      ['<=', ['get', Object.keys(DSSelCtx.DS)[0]], DSSelCtx.DS[Object.keys(DSSelCtx.DS)[0]].upperFilter]
    ],
    paint: {
      'fill-color': [
        "rgb",
        ["get", Object.keys(DSSelCtx.DS)[0]],
        ["-", 255, ["get", Object.keys(DSSelCtx.DS)[0]]],
        0
      ],
      'fill-opacity': DSSelCtx.DS[Object.keys(DSSelCtx.DS)[0]].opacity
    }
  }

  const layerStyle2 = Object.keys(DSSelCtx.DS).length>1 && {
    id: 'my-data2', //Object.keys(DSSelCtx.DS)[0],
    source: 'my-data', //Object.keys(DSSelCtx.DS)[0],
    type: 'fill',
    filter: [
      'all',
      ['>=', ['get', Object.keys(DSSelCtx.DS)[1]], DSSelCtx.DS[Object.keys(DSSelCtx.DS)[1]].lowerFilter],
      ['<=', ['get', Object.keys(DSSelCtx.DS)[1]], DSSelCtx.DS[Object.keys(DSSelCtx.DS)[1]].upperFilter]
    ],
    paint: {
      'fill-color': [
        "rgb",
        ["get", Object.keys(DSSelCtx.DS)[1]],
        ["-", 255, ["get", Object.keys(DSSelCtx.DS)[1]]],
        0
      ],
      'fill-opacity': DSSelCtx.DS[Object.keys(DSSelCtx.DS)[1]].opacity
    }
  }

  console.log(layerStyle)




  const mappa =
    <Map
      initialViewState={{
        longitude: -3,
        latitude: 54.5,
        zoom: 5
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken="pk.eyJ1IjoiZXR0b3JlbXVyYWJpdG8iLCJhIjoiY2pvaGM4bHNqMGh0ejNwb2FiYjBoemplOSJ9.qUwd_2Vm07oj5L8jq2XX-w"
    >
      <GeolocateControl position='bottom-right' />
      <NavigationControl position='bottom-right' />
      <ScaleControl />

      <Source id="my-data" type="geojson" data={geojson}>
        
      </Source>
      {layerStyle && <Layer {...layerStyle} />}
      {layerStyle2 && <Layer {...layerStyle2} />}


    </Map>


  return (
    <div className={classes.MainContent}>
      {mappa}
    </div>
  )
}

export default MainContent