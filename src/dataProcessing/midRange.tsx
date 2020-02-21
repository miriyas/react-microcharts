import min from './min'
import max from './max'

export default (data: number[]): number => max(data) - min(data) / 2
