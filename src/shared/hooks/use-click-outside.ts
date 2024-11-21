import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(handler: () => void) => {
	const elementRef = useRef<T>(null);

	const handleClick = (e: MouseEvent) => {
		if (
			elementRef.current &&
			!elementRef.current.contains(e.target as Node)
		) {
			handler();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	});

	return elementRef;
};
