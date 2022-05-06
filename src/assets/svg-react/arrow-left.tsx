import { SVGProps } from 'react';

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={44} height={44} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M21.46 13.54 13 22l8.46 8.46M13 22h18"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={-0.5}
      y={0.5}
      width={43}
      height={43}
      rx={11.5}
      transform="matrix(-1 0 0 1 43 0)"
      stroke="#969696"
    />
  </svg>
);

export default SvgArrowLeft;
