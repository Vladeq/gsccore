import { SVGProps } from 'react';

const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg width={21} height={21} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
