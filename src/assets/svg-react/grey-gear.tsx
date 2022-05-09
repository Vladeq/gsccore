import { SVGProps } from 'react';

const SvgGear = (props: SVGProps<SVGSVGElement>) => (
  <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.506 6.566c.226.323.424.665.59 1.022l2.429 1.35a9.563 9.563 0 0 1 .01 4.125l-2.438 1.35a6.9 6.9 0 0 1-.59 1.022l.046 2.784a9.75 9.75 0 0 1-3.572 2.072l-2.39-1.434a8.257 8.257 0 0 1-1.182 0l-2.381 1.425a9.618 9.618 0 0 1-3.581-2.063l.047-2.775a7.509 7.509 0 0 1-.591-1.03l-2.428-1.35a9.563 9.563 0 0 1-.01-4.126l2.438-1.35a6.9 6.9 0 0 1 .59-1.022l-.046-2.784A9.75 9.75 0 0 1 8.019 1.71l2.39 1.434a8.277 8.277 0 0 1 1.181 0l2.382-1.425a9.618 9.618 0 0 1 3.581 2.063l-.047 2.784Z"
      stroke="#969696"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgGear;
