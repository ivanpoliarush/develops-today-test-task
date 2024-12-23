import { SVGProps } from 'react';

export const Triangle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		width="8"
		height="5"
		viewBox="0 0 8 5"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M6.67969 0.00390625L7.5 0.824219L4 4.32422L0.5 0.824219L1.32031 0.00390625L4 2.68359L6.67969 0.00390625Z"
			fill="#F2F2F2"
		/>
	</svg>
);
