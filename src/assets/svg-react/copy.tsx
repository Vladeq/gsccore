import { SVGProps } from 'react';

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg width={56} height={56} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M33 32.999h6v-16H23v6"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 22.999H17v16h16v-16Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCopy;
