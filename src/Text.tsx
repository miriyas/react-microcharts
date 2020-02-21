import React from 'react'
import { DataPoint } from './dataProcessing/dataToPoints'

type MicrochartsTextProps = {
  text?: string
  point?: DataPoint
  fontSize?: number
  fontFamily?: string
}

const MicrochartsText = (props: MicrochartsTextProps): JSX.Element => {
  const { text = '', point = { x: 0, y: 0 }, fontSize = 10, fontFamily = 'Verdana' } = props
  const { x, y } = point

  return (
    <g>
      <text x={x} y={y} fontFamily={fontFamily} fontSize={fontSize}>
        {text}
      </text>
    </g>
  )
}

export default MicrochartsText