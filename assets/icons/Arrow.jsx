import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={15}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M2.96862 23.5L0.908203 21.4396L10.3957 11.9521L0.908203 2.46459L2.96862 0.404175L14.5165 11.9521L2.96862 23.5Z" fill="#EA5C2B"/>
  </Svg>
)

export default SvgComponent
