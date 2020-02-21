/* eslint-disable quote-props */
import React, { SVGAttributes, CSSProperties } from 'react'
import { DataPoint } from './dataProcessing/dataToPoints'

type TSpotColor = {
  [key: string]: string
}

type MicrochartsSpotsProps = {
  points: DataPoint[]
  height?: number
  size?: number
  color?: string
  style?: SVGAttributes<string>
  spotColors?: TSpotColor
}

const DEFAULT_SPOT_COLORS = {
  '-1': 'red',
  '0': 'black',
  '1': 'green'
}

const MicrochartsSpots = (props: MicrochartsSpotsProps): JSX.Element => {
  const { points, size = 2, style = {}, spotColors = DEFAULT_SPOT_COLORS } = props

  const lastDirection = (dataPoints: DataPoint[]): number => {
    const mathSign = (x: number): number => {
      if (Math.sign) return Math.sign(x)
      return x > 0 ? 1 : -1
    }

    return (points.length < 2) ? 0 : mathSign(dataPoints[dataPoints.length - 2].y - dataPoints[dataPoints.length - 1].y)
  }

  const startSpot = (
    <circle
      cx={points[0].x}
      cy={points[0].y}
      r={size}
      style={style as CSSProperties}
    />
  )
  const endSpot = (
    <circle
      cx={points[points.length - 1].x}
      cy={points[points.length - 1].y}
      r={size}
      style={style as CSSProperties || { fill: spotColors[lastDirection(points)] }}
    />
  )

  return (
    <g>
      {style && startSpot}
      {endSpot}
    </g>
  )
}

export default MicrochartsSpots
