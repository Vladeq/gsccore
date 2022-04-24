import * as React from 'react';
import { SVGProps } from 'react';

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={170} height={42} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m21 21.84 21-.42v-.84l-21-.42v1.68Z" fill="#FC5842" />
    <path
      d="M21.42 10.5h-.84L20.16 0h1.68l-.42 10.5ZM20.58 31.5h.84l.42 10.5h-1.68l.42-10.5ZM10.5 20.58v.84L0 21.84v-1.68l10.5.42ZM28.722 13.872l-.594-.594 7.127-7.721 1.188 1.188-7.721 7.127ZM13.278 28.128l.594.594-7.127 7.721-1.188-1.188 7.721-7.127ZM28.128 28.722l.594-.594 7.721 7.127-1.188 1.188-7.127-7.721ZM13.872 13.278l-.594.594-7.721-7.128 1.188-1.187 7.127 7.721ZM17.37 11.139l-.776.321-4.407-9.54 1.553-.643 3.63 9.862ZM24.63 30.861l.776-.321 4.407 9.54-1.553.643-3.63-9.861ZM11.139 24.63l.321.776-9.54 4.406-.643-1.552 9.862-3.63ZM25.406 11.46l-.776-.321 3.63-9.862 1.553.643-4.407 9.54ZM16.594 30.54l.776.322-3.63 9.86-1.553-.642 4.407-9.54ZM30.54 25.406l.321-.776 9.862 3.63-.643 1.552-9.54-4.406ZM11.46 16.594l-.321.776-9.862-3.63.643-1.553 9.54 4.407ZM19.363 10.62l-.824.163L16.08.567l1.648-.328 1.636 10.38ZM22.636 31.38l.824-.164 2.46 10.216-1.647.328-1.637-10.38ZM10.62 22.637l.164.824L.567 25.92.24 24.273l10.38-1.636ZM27.183 12.503l-.699-.467 5.484-8.964 1.397.934-6.182 8.497ZM14.817 29.497l.698.467-5.484 8.964-1.397-.934 6.183-8.497ZM29.497 27.183l.467-.699 8.964 5.485-.934 1.397-8.497-6.183ZM12.503 14.818l-.467.698-8.964-5.484.934-1.397 8.497 6.183ZM15.515 12.036l-.698.467-6.183-8.497 1.397-.934 5.484 8.964ZM26.484 29.964l.699-.467 6.182 8.497-1.397.934-5.484-8.964ZM29.964 15.516l-.467-.698 8.497-6.183.934 1.397-8.964 5.484ZM12.036 26.484l.467.699-8.497 6.183-.934-1.397 8.964-5.485ZM23.46 10.783l-.824-.164L24.273.24l1.648.328-2.461 10.216ZM18.54 31.216l.823.164-1.636 10.38-1.648-.328 2.46-10.216ZM31.216 23.46l.164-.823 10.38 1.636-.327 1.648-10.217-2.46ZM10.784 18.54l-.164.823L.24 17.727l.327-1.648 10.217 2.46ZM76.154 26.012c2.365 1.94 4.65 2.911 6.854 2.911 1.172 0 2.102-.252 2.79-.758a2.425 2.425 0 0 0 1.031-2.062 2.26 2.26 0 0 0-.485-1.456c-.324-.404-.94-.839-1.85-1.304l-3.7-1.759c-1.638-.768-2.785-1.597-3.442-2.487a5.209 5.209 0 0 1-.986-3.184 5.886 5.886 0 0 1 2.184-4.731 6.809 6.809 0 0 1 2.32-1.229 9.49 9.49 0 0 1 4.443-.258 9.39 9.39 0 0 1 1.622.44c.506.188.993.421 1.456.698.436.26.847.559 1.228.895v4.245a11.085 11.085 0 0 0-2.987-2.168 7.146 7.146 0 0 0-3.14-.773c-.97 0-1.753.227-2.35.682a2.218 2.218 0 0 0-.894 1.865c-.007.484.153.956.455 1.335.303.384.849.758 1.638 1.122l3.457 1.607c.8.364 1.571.79 2.305 1.274a6.716 6.716 0 0 1 1.516 1.364c.375.469.658 1.004.834 1.578.178.61.265 1.244.258 1.88a6.116 6.116 0 0 1-2.38 4.989 7.583 7.583 0 0 1-2.487 1.258c-.95.285-1.936.428-2.927.425a11.45 11.45 0 0 1-3.7-.607 10.214 10.214 0 0 1-3.063-1.607v-4.185ZM92.486 20.978c-.01-1.532.295-3.05.895-4.459a11.375 11.375 0 0 1 6.065-6.08c1.404-.6 2.916-.905 4.443-.895a11.4 11.4 0 0 1 3.018.394c.952.26 1.865.648 2.714 1.153v4.73a6.84 6.84 0 0 0-2.457-1.743 8.026 8.026 0 0 0-3.184-.622 7.495 7.495 0 0 0-2.942.577 7.061 7.061 0 0 0-2.35 1.592 7.406 7.406 0 0 0-1.547 2.396 7.769 7.769 0 0 0-.56 2.957 7.654 7.654 0 0 0 .56 2.941c.36.889.89 1.697 1.562 2.38a7.467 7.467 0 0 0 2.35 1.608c.924.4 1.921.601 2.927.592a8.017 8.017 0 0 0 3.184-.622 6.832 6.832 0 0 0 2.457-1.744v4.731c-.848.506-1.762.893-2.714 1.153-.984.265-1.999.398-3.018.394-1.528.01-3.042-.3-4.443-.91a11.717 11.717 0 0 1-3.624-2.456 11.497 11.497 0 0 1-2.441-3.625 11.107 11.107 0 0 1-.895-4.442ZM123.083 9.544c1.532-.013 3.05.292 4.458.895a11.378 11.378 0 0 1 3.594 2.441 11.17 11.17 0 0 1 2.396 3.64c.58 1.414.874 2.93.864 4.458a11.293 11.293 0 0 1-.879 4.443 11.58 11.58 0 0 1-2.396 3.624 11.366 11.366 0 0 1-3.594 2.456 11.302 11.302 0 0 1-8.886 0 11.358 11.358 0 0 1-3.594-2.456 11.574 11.574 0 0 1-2.396-3.624 11.707 11.707 0 0 1 0-8.901 11.515 11.515 0 0 1 2.396-3.64 11.156 11.156 0 0 1 8.037-3.336Zm0 19.076c1.01.014 2.01-.199 2.927-.622.86-.4 1.633-.967 2.274-1.668a7.594 7.594 0 0 0 1.486-2.426 8.063 8.063 0 0 0 .531-2.926 8.19 8.19 0 0 0-.531-2.942c-.336-.9-.84-1.73-1.486-2.441a7.012 7.012 0 0 0-2.274-1.653 7.364 7.364 0 0 0-5.854 0 7.01 7.01 0 0 0-2.274 1.653 7.57 7.57 0 0 0-1.486 2.441 8.19 8.19 0 0 0-.531 2.942c-.006 1 .174 1.992.531 2.926a7.59 7.59 0 0 0 1.486 2.427 7.144 7.144 0 0 0 2.29 1.668c.912.42 1.907.631 2.911.621ZM137.273 32.047V9.908h6.248c1.17-.015 2.336.15 3.457.485a7.946 7.946 0 0 1 2.638 1.365 5.941 5.941 0 0 1 1.684 2.153c.404.896.606 1.869.591 2.851a6.182 6.182 0 0 1-1.122 3.73 6.809 6.809 0 0 1-3.215 2.335l6.884 9.22h-4.761l-6.338-8.552h-1.972v8.552h-4.094Zm4.094-11.828h2.154c1.293 0 2.32-.303 3.078-.91.758-.606 1.137-1.455 1.137-2.547s-.379-1.946-1.137-2.563c-.758-.616-1.784-.924-3.078-.925h-2.154v6.945ZM156.207 9.908h13.647v3.397h-9.644v5.732h8.886v3.427h-8.886v6.186h9.705v3.397h-13.708V9.908ZM63.282 9.589a10.513 10.513 0 0 1 5.444 1.44 10.64 10.64 0 0 1 3.897 4.019l-3.427 2.062a7.098 7.098 0 0 0-2.502-2.7 6.346 6.346 0 0 0-3.412-.97 6.853 6.853 0 0 0-2.896.607A7.01 7.01 0 0 0 58.11 15.7a7.61 7.61 0 0 0-1.486 2.426 8 8 0 0 0-.53 2.896 7.92 7.92 0 0 0 .545 2.911 7.827 7.827 0 0 0 1.517 2.457 7.463 7.463 0 0 0 2.29 1.698 6.57 6.57 0 0 0 2.895.637c1.638 0 3.023-.45 4.155-1.35a6.244 6.244 0 0 0 2.214-3.654h-6.126v-3.396h10.372a13.76 13.76 0 0 1-.44 4.76 9.903 9.903 0 0 1-2.077 3.852 9.356 9.356 0 0 1-3.579 2.624c-1.45.603-3.008.907-4.58.895a10.845 10.845 0 0 1-4.427-.91 11.39 11.39 0 0 1-3.578-2.457 11.544 11.544 0 0 1-2.396-3.624 11.27 11.27 0 0 1-.88-4.443 11.459 11.459 0 0 1 3.26-8.082 11.245 11.245 0 0 1 3.594-2.457 11.008 11.008 0 0 1 4.428-.894Z"
      fill="#fff"
    />
  </svg>
);

export default SvgLogo;
