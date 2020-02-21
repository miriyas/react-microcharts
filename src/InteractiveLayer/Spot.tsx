import React from 'react'

type SpotProps = {
  cx: number
  cy: number
}

const Spot = ({ cx, cy }: SpotProps): JSX.Element => (
  <circle
    cx={cx}
    cy={cy}
    r={2}
  />
)

export default Spot
