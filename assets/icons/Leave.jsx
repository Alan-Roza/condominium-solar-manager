import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M3.9375 18.375C3.5875 18.375 3.28125 18.2437 3.01875 17.9812C2.75625 17.7187 2.625 17.4125 2.625 17.0625V3.9375C2.625 3.5875 2.75625 3.28125 3.01875 3.01875C3.28125 2.75625 3.5875 2.625 3.9375 2.625H10.3031V3.9375H3.9375V17.0625H10.3031V18.375H3.9375ZM14.5687 14.3281L13.6281 13.3875L15.8594 11.1562H8.20312V9.84375H15.8156L13.5844 7.6125L14.525 6.67188L18.375 10.5219L14.5687 14.3281Z" fill="white" />

  </Svg>
)

export default SvgComponent
