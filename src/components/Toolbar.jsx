import React from 'react'
import '../styles/toolbar.scss'
import toolState from '../store/toolState'
import canvasState from '../store/canvasState'
import Brush from '../tools/Brush'
import Rect from '../tools/Rect'
import Circle from '../tools/Circle'
import Line from '../tools/Line'

const Toolbar = () => {

  const changeColor = e => {
    toolState.setFillColor(e.target.value)
    toolState.setStrokeColor(e.target.value)
  }

  return (
    <div className='toolbar'>
      <button className='toolbar__btn toolbar__btn-brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))} />
      <button className='toolbar__btn toolbar__btn-rect' onClick={() => toolState.setTool(new Rect(canvasState.canvas))}></button>
      <button className='toolbar__btn toolbar__btn-circle' onClick={() => toolState.setTool(new Circle(canvasState.canvas))}></button>
      <button className='toolbar__btn toolbar__btn-eraser'  onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>
      <button className='toolbar__btn toolbar__btn-line' onClick={() => toolState.setTool(new Line(canvasState.canvas))}></button>
      <input onChange={e => changeColor(e)} type="color" style={{marginLeft: 10}}/>
      <button className='toolbar__btn toolbar__btn-undo'></button>
      <button className='toolbar__btn toolbar__btn-redo'></button>
      <button className='toolbar__btn toolbar__btn-save'></button>
    </div>
  )
}

export default Toolbar
