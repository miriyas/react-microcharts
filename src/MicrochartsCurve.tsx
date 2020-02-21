import React, { CSSProperties, SVGAttributes } from 'react'
import { DataPoint } from './dataProcessing/dataToPoints'

type MicrochartsCurveProps = {
  points: DataPoint[]
  color: string
  style?: SVGAttributes<string>
  height?: number
  margin?: number
  divisor?: number
}

const MicrochartsCurve = (props: MicrochartsCurveProps): JSX.Element => {
  const { points, height = 1, margin = 0, color, style = {}, divisor = 0.25 } = props
  let prev: DataPoint

  const curve = (p: DataPoint): (number|string)[] => {
    let res
    if (!prev) {
      res = [p.x, p.y]
    } else {
      const len = (p.x - prev.x) * divisor
      res = ['C', prev.x + len, prev.y, p.x - len, p.y, p.x, p.y]
    }
    prev = p

    return res
  }
  const linePoints = points.map((p) => curve(p)).reduce((a, b) => a.concat(b))
  const closePolyPoints = [
    `L${points[points.length - 1].x}`,
    height - margin,
    margin,
    height - margin,
    margin,
    points[0].y
  ]
  const fillPoints = linePoints.concat(closePolyPoints)

  const lineStyle = {
    stroke: color || style.stroke || 'slategray',
    strokeWidth: style.strokeWidth || '1',
    strokeLinejoin: style.strokeLinejoin || 'round',
    strokeLinecap: style.strokeLinecap || 'round',
    fill: 'none'
  }
  const fillStyle = {
    stroke: style.stroke || 'none',
    strokeWidth: '0',
    fillOpacity: style.fillOpacity || '.1',
    fill: style.fill || color || 'slategray'
  }

  return (
    <g>
      <path d={`M${fillPoints.join(' ')}`} style={fillStyle as CSSProperties} />
      <path d={`M${linePoints.join(' ')}`} style={lineStyle} />
    </g>
  )
}

export default MicrochartsCurve
