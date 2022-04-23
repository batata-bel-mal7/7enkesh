import * as React from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'
import { memo } from 'react'

const SvgComponent = (props: SvgProps) => (
  <Svg {...props} width={24} height={24} fill="none">
    <Path
      clipRule="evenodd"
      d="m20.807 7.624-.623-1.08a1.913 1.913 0 0 0-2.608-.705v0a1.904 1.904 0 0 1-2.61-.678 1.832 1.832 0 0 1-.255-.915v0a1.913 1.913 0 0 0-1.914-1.968h-1.254A1.904 1.904 0 0 0 9.64 4.191v0a1.913 1.913 0 0 1-1.913 1.886 1.83 1.83 0 0 1-.916-.257v0a1.913 1.913 0 0 0-2.608.705l-.669 1.099a1.913 1.913 0 0 0 .696 2.608v0a1.913 1.913 0 0 1 0 3.314v0a1.904 1.904 0 0 0-.696 2.6v0l.632 1.088a1.913 1.913 0 0 0 2.609.742v0a1.895 1.895 0 0 1 2.6.696c.164.277.252.593.255.915v0c0 1.056.857 1.913 1.913 1.913h1.255c1.053 0 1.908-.85 1.912-1.904v0a1.904 1.904 0 0 1 1.914-1.913c.321.009.636.097.915.256v0a1.913 1.913 0 0 0 2.609-.695v0l.659-1.099a1.904 1.904 0 0 0-.696-2.608v0a1.904 1.904 0 0 1-.696-2.61c.166-.289.406-.529.696-.695v0a1.913 1.913 0 0 0 .696-2.6v0-.008Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={12.175}
      cy={11.889}
      r={2.636}
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Memo = memo(SvgComponent)
export default Memo
