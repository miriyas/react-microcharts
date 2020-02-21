import React, { useState, SVGAttributes, CSSProperties, useCallback } from 'react'

import dataToPoints, { DataPoint } from '../dataProcessing/dataToPoints'
import Cursor from './Cursor'
import Spot from './Spot'

type SVGOpts = {
  style: {}
  viewBox: string
  preserveAspectRatio: string
  width?: number
  height?: number
}

type InteractiveLayerProps = {
  data: number[]
  limit: number
  max: number
  min: number
  svgWidth: number
  svgHeight: number
  style?: SVGAttributes<string>
  width?: number
  height?: number
  margin?: number
  preserveAspectRatio?: string
  onMouseMove?: (currentDataPoint: DataPoint, max: number, offsetX: number, offsetY: number) => void
  onMouseLeave?: () => void
  onClick?: () => void
}

const OFFSCREEN = -1000

type TGetMouseX = {
  offsetX: number
  rectWidth: number
  width: number
}

const getMouseX = ({ offsetX, rectWidth, width }: TGetMouseX): number => (
  Math.floor(offsetX / (rectWidth / width))
)

const getNextDataPoint = (points: DataPoint[], mouseX: number): [DataPoint, number] => {
  const lastItemIndex = points.length - 1
  let pointIndex = 0
  let nextDataPoint = points.find((entry: DataPoint) => {
    const match = entry.x >= mouseX
    if (match && !pointIndex) {
      return match
    }
    pointIndex += 1
    return match
  })

  if (!nextDataPoint) {
    nextDataPoint = points[lastItemIndex]
  }
  return [nextDataPoint, pointIndex]
}

const MicrochartsInteractiveLayer = (props: InteractiveLayerProps): JSX.Element | null => {
  const {
    data,
    limit,
    width = 240,
    height = 60,
    margin = 0,
    max,
    min,
    svgWidth,
    svgHeight,
    style = {},
    preserveAspectRatio = 'none',
    onMouseMove,
    onMouseLeave,
  } = props
  const [cx, setCx] = useState(OFFSCREEN)
  const [cy, setCy] = useState(OFFSCREEN)
  const [isActive, setIsActive] = useState(false)

  const [rectWidth, setRectWidth] = useState(0)
  const rectRef = useCallback((node) => {
    setRectWidth(node.getBoundingClientRect().width)
  }, [])

  const points: DataPoint[] = dataToPoints({ data, limit, width, height, margin, max, min })

  const handleOnMouseMove = useCallback(() => (
    (event: React.MouseEvent<HTMLElement>): void => {
      if (isActive) return

      const mouseX = getMouseX({ offsetX: event.nativeEvent.offsetX, rectWidth, width })

      const [nextDataPoint, pointIndex] = getNextDataPoint(points, mouseX)

      const prevDataPoint: DataPoint = points[points.indexOf(nextDataPoint) - 1]
      let currentDataPoint: DataPoint
      let halfway: number

      if (prevDataPoint) {
        halfway = prevDataPoint.x + ((nextDataPoint.x - prevDataPoint.x) / 2)
        currentDataPoint = mouseX >= halfway ? nextDataPoint : prevDataPoint
      } else {
        currentDataPoint = nextDataPoint
      }

      if (!currentDataPoint) return

      const { x, y } = currentDataPoint
      setCx(x)
      setCy(y)

      if (onMouseMove) {
        onMouseMove(currentDataPoint, Math.max(0, pointIndex - 1), event.nativeEvent.offsetX, event.nativeEvent.offsetY)
      }
    }), [isActive, onMouseMove, points, rectWidth, width])

  const handleOnMouseLeave = (): void => {
    if (isActive) return

    setCx(OFFSCREEN)
    setCy(OFFSCREEN)

    if (onMouseLeave) {
      onMouseLeave()
    }
  }

  const handleOnClick = (): void => {
    setIsActive(!isActive)
  }


  const svgOpts: SVGOpts = { style, viewBox: `0 0 ${width} ${svgHeight}`, preserveAspectRatio }
  if (svgWidth > 0) svgOpts.width = svgWidth


  if (data.length === 0) return null

  return (
    <svg {...svgOpts}>
      <Spot cx={cx} cy={cy} />
      <Cursor x1={cx} x2={cx} height={svgHeight} />
      <rect
        ref={rectRef}
        height={svgHeight}
        width={width}
        style={{ fill: 'transparent', stroke: 'transparent', ...style } as CSSProperties}
        onMouseMove={(): Function => handleOnMouseMove()}
        onMouseLeave={handleOnMouseLeave}
        onClick={handleOnClick}
      />
    </svg>
  )
}

export default MicrochartsInteractiveLayer
