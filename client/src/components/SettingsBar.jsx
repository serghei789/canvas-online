import React from 'react'
// import '../styles/toolbar.scss'
import toolState from '../store/toolState'

const SettingsBar = () => {
  return (
    <div className='setting-bar'>
      <label htmlFor="line__width">Толщина линии</label>
      <input 
        onChange={e => toolState.setLineWidth(e.target.value)}
        style={{margin: '0 10px'}} 
        id='line__width' 
        type="number" defaultValue={1} min={1} max={50} />
      <label htmlFor="stroke__color">Цвет обводки</label>
      <input 
        onChange={e => toolState.setStrokeColor(e.target.value)}
        style={{margin: '0 10px'}} 
        id='line__width' 
        type="color" />
    </div>

  )
}

export default SettingsBar
