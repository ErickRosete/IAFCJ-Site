import React from 'react'
import "./Cell.css"

const Cell = (props) => {
  return (
    <div className="cells__cell-item">
      <p>Lider: {props.cell.leader}</p>
      <p>Ubicación: {props.cell.address.street} #{props.cell.address.exteriorNumber}</p>
      <p>Teléfono: {props.cell.phone}</p>

      <p>{new Date(props.cell.date).toLocaleString()}</p>
    </div>
  )
}

export default Cell
