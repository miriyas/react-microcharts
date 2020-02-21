import React from 'react'
import MicrochartsText from './MicrochartsText'
import MicrochartsLine from './MicrochartsLine'
import MicrochartsCurve from './MicrochartsCurve'
import MicrochartsBars from './MicrochartsBars'
import MicrochartsSpots from './MicrochartsSpots'
import MicrochartsReferenceLine from './MicrochartsReferenceLine'
import MicrochartsNormalBand from './MicrochartsNormalBand'
import dataToPoints from './dataProcessing/dataToPoints'

type SVGOpts = {
  style: {}
  viewBox: string
  preserveAspectRatio: string
  width?: number
  height?: number
}

type MicrochartsProps = {
  data: number[]
  limit: number
  width: number
  height: number
  svgWidth: number
  svgHeight: number
  preserveAspectRatio: string
  margin: number
  style: {}
  min: number
  max: number
  onMouseMove: () => void
  children?: JSX.Element[] | JSX.Element
}

const Microcharts = (props: MicrochartsProps): JSX.Element | null => {
  const {
    data = [],
    limit,
    width = 240,
    height = 60,
    svgWidth,
    svgHeight,
    // Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
    preserveAspectRatio = 'none', // https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
    margin = 2,
    style,
    max,
    min,
    children
  } = props

  if (data.length === 0) return null

  const points = dataToPoints({
    data,
    limit,
    width,
    height,
    margin,
    max,
    min
  })

  const svgOpts: SVGOpts = {
    style,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio
  }

  if (svgWidth > 0) svgOpts.width = svgWidth

  if (svgHeight > 0) svgOpts.height = svgHeight


  return (
    <svg {...svgOpts}>
      {children && children instanceof Array && children.map(
        (child: JSX.Element) => React.cloneElement(child, {
          data,
          points,
          width,
          height,
          margin
        })
      )}
    </svg>
  )
}

export {
  Microcharts,
  MicrochartsLine,
  MicrochartsCurve,
  MicrochartsBars,
  MicrochartsSpots,
  MicrochartsReferenceLine,
  MicrochartsNormalBand,
  MicrochartsText
}
