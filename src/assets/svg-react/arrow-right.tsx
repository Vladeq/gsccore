import { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={44} height={44} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M22.54 13.54 31 22l-8.46 8.46M31 22H13"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={0.5} y={0.5} width={43} height={43} rx={11.5} stroke="#969696" />
  </svg>
);

export default SvgArrowRight;
