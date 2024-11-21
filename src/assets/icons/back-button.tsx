import { SVGProps } from 'react';

export const BackButton = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10 4L6 8L10 12"
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
