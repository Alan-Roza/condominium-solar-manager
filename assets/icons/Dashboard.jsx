import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={37}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.167 30.833V13.875h5.396v16.958H6.167Zm9.635 0V6.167h5.396v24.666h-5.396Zm9.636 0V20.042h5.396v10.791h-5.396Z"
      fill="#EA5C2B"
    />
  </Svg>
)

export default SvgComponent
