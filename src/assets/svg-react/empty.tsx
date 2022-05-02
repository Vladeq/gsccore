import { SVGProps } from 'react';

const SvgEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg width={96} height={96} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={48} cy={48} r={48} fill="#393939" />
    <path
      d="m39 57 18-18M57 57 39 39"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmpty;
