import { SVGProps } from "react";
const SvgCloseFill = (props?: SVGProps<SVGSVGElement>) => (
  <svg
    width={props?.width ? props.width : 32}
    height={props?.height ? props.height : 32}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
  </svg>
);
export default SvgCloseFill;
