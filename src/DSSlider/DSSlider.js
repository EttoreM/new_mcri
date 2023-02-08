import React, { useState, useContext, useEffect } from 'react'
import { Slider } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Switch from '@mui/material/Switch'
import CloseIcon from '@mui/icons-material/Close'
import DSSelContext from '../store/DS-Sel-context'
import DSVisContext from '../store/DS-Vis-context'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Grid from '@mui/material/Grid'
import FilterAltIcon from '@mui/icons-material/FilterAlt'


const DatasetSlider = props => {


  const DSSelCtx = useContext(DSSelContext)
  const DSVisCtx = useContext(DSVisContext)


  useEffect(() => {
    DSVisCtx.updateOpacity(0.4)
  }, [])


  const [active, setActive] = useState(false)
  const [minMax, setMinMax] = useState([0, 100])


  const handleChangeOpacity = (event, ds) => {
    let value = event.target.value
    console.log(value)
    console.log(ds)
    // setOpacity(value)
    DSSelCtx.updateOpacity(ds, value)
    DSVisCtx.updateOpacity(value)
    console.log(DSSelCtx.DS)
  }

  const removeSelf = (dsname) => {
    DSSelCtx.removeDS(dsname)
  }

  const handleSwitch = () => {
    setActive(!active)
  }

  const handleChangeMinMax = (event, ds) => {
    let values = event.target.value
    console.log(values)
    console.log(ds)
    if (!Array.isArray(values)) {
      return
    }
    DSVisCtx.updateLowerFilter(values[0])
    DSVisCtx.updateUpperFilter(values[1])

    DSSelCtx.updateLowerFilter(ds, values[0])
    DSSelCtx.updateUpperFilter(ds, values[1])
  }


  const DSControls = DSSelCtx.DS[props.DatasetName] ?
    <Card sx={{ mx: 1.5, my: 1, backgroundColor: 'rgba(255,255,255,0.7)' }} key={props.DatasetName}>
      <CardHeader
        sx={{ m: 1, p: 0 }}
        avatar={<Switch size="small" onClick={handleSwitch} />}
        action={
          <IconButton style={{ width: '2rem', height: '2rem', marginRight: '0.2rem' }} onClick={() => { removeSelf(props.DatasetName) }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        titleTypographyProps={{ variant: 'body2' }}
        title={props.DatasetName}
      />

      <CardContent
        style={{ margin: active ? '0.7rem' : '0rem', padding: "0rem", height: active ? '5.3rem' : '0rem', transition: 'all 0.2s' }}
      >
        <Grid container spacing={0} alignItems="center" >
          <Grid item xs={1.5} />
          <Grid item xs={8.5}>
            <Slider
              min={0}
              max={1}
              step={0.2}
              value={DSSelCtx.DS[props.DatasetName].opacity}
              onChange={(e) => handleChangeOpacity(e, props.DatasetName)}
              size="small"
              marks={true}
            />
          </Grid>
          <Grid item xs={2}>
            <VisibilityIcon fontSize='small' color='disabled' />
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems="center" >
          <Grid item xs={1.5} />
          <Grid item xs={8.5}>
            <Slider
              min={DSSelCtx.DS[props.DatasetName].minValue}
              max={DSSelCtx.DS[props.DatasetName].maxValue}
              value={[DSSelCtx.DS[props.DatasetName].lowerFilter, DSSelCtx.DS[props.DatasetName].upperFilter]}
              onChange={e => handleChangeMinMax(e, props.DatasetName)}
              valueLabelDisplay="auto"
              disableSwap
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <FilterAltIcon fontSize='small' color='disabled' />
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems="center" >
          <Grid item xs={1.5} />
          <Grid item xs={8.5} >
            <div style={{ backgroundImage: "linear-gradient(to right, rgb(0,255,0), rgb(255,0,0))", height: "0.3rem"}}></div>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <Grid container spacing={0} alignItems="center" >
          <Grid item xs={12} >
            <p style={{ marginTop: "0.4rem"}}>units</p>
          </Grid>
        </Grid>

      </CardContent>
    </Card >

    : <div></div>


  return (
    DSControls
  )
}

export default DatasetSlider