import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M12.5 28V15.5H0V12.5H12.5V0H15.5V12.5H28V15.5H15.5V28H12.5Z" fill={props.color}/>
  </Svg>
)

export default SvgComponent
