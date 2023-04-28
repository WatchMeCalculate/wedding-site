import { SVGProps } from "react";
const SvgMenuLine = (props?: SVGProps<SVGSVGElement>) => (
  <svg
    width={props?.width ? props.width : 32}
    height={props?.height ? props.height : 32}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
  </svg>
);
export default SvgMenuLine;
