import React from 'react'

type CursorProps = {
  x1: number
  x2: number
  height: number
}

const Cursor = ({ x1, x2, height }: CursorProps): JSX.Element => (
  <line x1={x1} x2={x2} y1={0} y2={height} style={{ strokeWidth: 1, stroke: 'red' }} />
)

export default Cursor
