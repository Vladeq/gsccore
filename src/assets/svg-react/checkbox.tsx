import { SVGProps } from 'react';

const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="0" y="0" width="100%" height="100%" />
    <path
      d="m1.16 10.406 5.623 5.623L20.84 1.97"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCheckbox;
