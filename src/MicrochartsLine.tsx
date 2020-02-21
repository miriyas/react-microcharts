import React, { CSSProperties, SVGAttributes } from 'react'

import { DataPoint } from './dataProcessing/dataToPoints'

type MicrochartsLineProps = {
  data: number[]
  points: DataPoint[]
  height?: number
  margin?: number
  color?: string
  style?: SVGAttributes<string>
  onMouseMove?: (type: string, data: number, p: DataPoint) => void
}

const MicrochartsLine = (props: MicrochartsLineProps): JSX.Element => {
  const { data, points, height = 1, margin = 0, color, style = {}, onMouseMove } = props

  const handleOnMouseMove = (type: string, d: number, p: DataPoint): void => {
    if (onMouseMove) onMouseMove(type, d, p)
  }

  const linePoints = points.map((p) => [p.x, p.y]).reduce((a, b) => a.concat(b))
  const closePolyPoints = [
    points[points.length - 1].x,
    height - margin,
    margin,
    height - margin,
    margin,
    points[0].y,
  ]
  const fillPoints = linePoints.concat(closePolyPoints)

  const lineStyle = {
    stroke: color || style.stroke || 'slategray',
    strokeWidth: style.strokeWidth || '1',
    strokeLinejoin: style.strokeLinejoin || 'round',
    strokeLinecap: style.strokeLinecap || 'round',
    fill: 'none',
  }
  const fillStyle = {
    stroke: style.stroke || 'none',
    strokeWidth: '0',
    fillOpacity: style.fillOpacity || '.1',
    fill: style.fill || color || 'slategray',
    pointerEvents: 'auto',
  }

  const tooltips = points.map((p, i) => {
    const key = `tooltip-${i}` // TODO: possible conflict
    return (
      <circle
        key={key}
        cx={p.x}
        cy={p.y}
        r={2}
        style={fillStyle as CSSProperties}
        onMouseEnter={(): void => handleOnMouseMove('enter', data[i], p)}
        onClick={(): void => handleOnMouseMove('click', data[i], p)}
      />
    )
  })

  return (
    <g>
      {tooltips}
      <polyline points={fillPoints.join(' ')} style={fillStyle as CSSProperties} />
      <polyline points={linePoints.join(' ')} style={lineStyle} />
    </g>
  )
}

export default MicrochartsLine
