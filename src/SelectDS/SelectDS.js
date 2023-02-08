import React, { useState, Fragment, useContext } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'
import DSSelContext from '../store/DS-Sel-context'

const SelectDS = (props) => {

  const DSCtx = useContext(DSSelContext)

  const [theme, setTheme] = useState('')


  const handleSelectTheme = (event) => {
    setTheme(event.target.value)
  }


  const handleSelectDS = (event) => {
    DSCtx.updateDS(event.target.value)
    // console.log(DSCtx)
  }


  const selectThemeUI =
    <div style={{ padding: '0.7rem', width: "calc(100% - 1.4rem)" }}>
      <FormControl sx={{ m: 0, p: 0, minWidth: 120, width: "100%" }} size="small" >
        <InputLabel id="demo-simple-select-helper-label" >Data theme</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={theme}
          label="Select theme"
          onChange={handleSelectTheme}
          // size="small"
        >
          <MenuItem value='Air Quality' sx={{ fontSize: "0.8rem" }}>Air Quality</MenuItem>
          <MenuItem value='Flood' sx={{ fontSize: "0.8rem" }}>Flood</MenuItem>
          <MenuItem value='Traffic' sx={{ fontSize: "0.8rem" }}>Traffic</MenuItem>
        </Select>
      </FormControl>
    </div>


  const datasets = [
    'Dataset1',
    'Dataset2',
    'Dataset3',
    'Dataset4',
    'Dataset5',
    'Dataset6',
    'Dataset7',
    'Dataset8',
    'Dataset9',
    'Dataset10'
  ]

  const selectDSUI =

    <div style={{ padding: '0.7rem', width: 'calc(100% - 1.4rem)' }}>
      <FormControl sx={{ m: 0, width: "100%" }} size="small">
        <InputLabel id="demo-multiple-checkbox-label">Datasets</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={Object.keys(DSCtx.DS)}
          onChange={handleSelectDS}
          input={<OutlinedInput label="Datasets" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {datasets.map((d) => (
            <MenuItem key={d} value={d} dense={true} >
              <Checkbox checked={d in DSCtx.DS} sx={{ m: 0, mr: 1, p: 0 }} />
              <ListItemText primary={d} sx={{ fontSize: "0.8rem" }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

  return (
    <Fragment>
      {selectThemeUI}
      {selectDSUI}
    </Fragment>
  )
}

export default SelectDS