import mean from './mean'

export default (data: number[]): number => {
  const dataMean = mean(data)
  const sq = data.map((n) => (n - dataMean) ** 2)
  return mean(sq)
}
