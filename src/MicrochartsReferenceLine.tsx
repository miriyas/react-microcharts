import React, { SVGAttributes, CSSProperties } from 'react'

import * as dataProcessing from './dataProcessing'
import { DataPoint } from './dataProcessing/dataToPoints'

type MicrochartsReferenceLineProps = {
  points: DataPoint[]
  type: 'max' | 'min' | 'mean' | 'median' | 'custom'
  value: number
  style?: SVGAttributes<string>
  margin?: number
}

const DEFAULT_LINE_STYLE = {
  stroke: 'red',
  strokeOpacity: 0.75,
  strokeDasharray: '2, 2'
}

const MicrochartsReferenceLine = (props: MicrochartsReferenceLineProps): JSX.Element => {
  const { points, margin = 0, type = 'mean', style = DEFAULT_LINE_STYLE, value } = props
  const ypoints = points.map((p) => p.y)
  const y = type === 'custom' ? value : dataProcessing[type](ypoints) // TODO: Fix value when type === 'custom'

  return (
    <line
      x1={points[0].x}
      y1={y + margin}
      x2={points[points.length - 1].x}
      y2={y + margin}
      style={style as CSSProperties}
    />
  )
}

export default MicrochartsReferenceLine
