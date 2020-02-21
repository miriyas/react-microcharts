import React, { CSSProperties } from 'react'

import { mean, stdev } from './dataProcessing'
import { DataPoint } from './dataProcessing/dataToPoints'

type MicrochartsNormalBandProps = {
  points: DataPoint[]
  style?: CSSProperties
  margin?: number
}

const DEFAULT_SVG_STYLE = { fill: 'red', fillOpacity: 0.1 }

const MicrochartsNormalBand = (props: MicrochartsNormalBandProps): JSX.Element => {
  const { points, margin = 1, style = DEFAULT_SVG_STYLE } = props

  const ypoints = points.map((p) => p.y)
  const dataMean = mean(ypoints)
  const dataStdev = stdev(ypoints)

  return (
    <rect
      x={points[0].x}
      y={dataMean - dataStdev + margin}
      width={points[points.length - 1].x - points[0].x}
      height={dataStdev * 2}
      style={style}
    />
  )
}

export default MicrochartsNormalBand
