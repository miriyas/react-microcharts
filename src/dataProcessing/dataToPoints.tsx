import arrayMin from './min'
import arrayMax from './max'

type DataToPointsProps = {
  data: number[]
  limit: number
  width?: number
  height?: number
  margin?: number
  max?: number
  min?: number
}

export type DataPoint = {
  x: number
  y: number
}

const dataToPoints = (props: DataToPointsProps): DataPoint[] => {
  const { data, limit, width = 1, height = 1, margin = 0, max = arrayMax(data), min = arrayMin(data) } = props
  let newData = [...data]
  const len = data.length

  if (limit && limit < len) {
    newData = data.slice(len - limit)
  }

  const vfactor = (height - margin * 2) / (max - min || 2)
  const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0))

  return newData.map((d, i) => ({
    x: i * hfactor + margin,
    y: (max === min ? 1 : max - d) * vfactor + margin
  }))
}

export default dataToPoints
