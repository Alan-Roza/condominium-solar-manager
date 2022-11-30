import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={12}
    height={12}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.44683 12.4718L0.528076 11.5531L5.5812 6.49995L0.528076 1.44683L1.44683 0.528076L6.49995 5.5812L11.5531 0.528076L12.4718 1.44683L7.4187 6.49995L12.4718 11.5531L11.5531 12.4718L6.49995 7.4187L1.44683 12.4718Z"
      fill={props?.color}
    />
  </Svg>
)

export default SvgComponent
