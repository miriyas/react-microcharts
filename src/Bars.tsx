import React, { CSSProperties, SVGAttributes } from 'react'
import { DataPoint } from './dataProcessing/dataToPoints'

type MicrochartsBarsProps = {
  points: DataPoint[]
  height?: number
  style?: SVGAttributes<string>
  barWidth?: number
  margin?: number
  onMouseMove: (p: DataPoint) => void
}

const DEFAULT_BAR_STYLE: SVGAttributes<string> = {
  fill: 'slategray'
}

const getStrokeWidth = (style?: SVGAttributes<string>): number => {
  if (style && style.strokeWidth) {
    return Number(style.strokeWidth)
  }
  return 0
}

type GetWidthProps = {
  points: DataPoint[]
  strokeWidth: number
  marginWidth: number
  barWidth?: number
}

const getWidth = (props: GetWidthProps): number => {
  const { barWidth, points, strokeWidth, marginWidth } = props
  if (barWidth) return barWidth
  return (points && points.length >= 2 ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth) : 0)
}

const MicrochartsBars = (props: MicrochartsBarsProps): JSX.Element => {
  const { points, height = 1, style = DEFAULT_BAR_STYLE, barWidth, margin, onMouseMove } = props
  const strokeWidth = getStrokeWidth(style)
  const marginWidth = margin ? 2 * margin : 0
  const width = getWidth({ points, strokeWidth, marginWidth, barWidth })

  return (
    <g transform="scale(1,-1)">
      {points.map((p, i) => {
        const key = `point-${i}` // TODO: possible conflict
        return (
          <rect
            key={key}
            x={p.x - (width + strokeWidth) / 2}
            y={-height}
            width={width}
            height={Math.max(0, height - p.y)}
            style={style as CSSProperties}
            onMouseMove={onMouseMove && ((): void => onMouseMove(p))}
          />
        )
      })}
    </g>
  )
}

export default MicrochartsBars
