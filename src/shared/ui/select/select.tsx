'use client';

import { Triangle } from '@/assets/icons/triangle';
import { useClickOutside } from '@/shared/hooks/use-click-outside';
import clsx from 'clsx';
import { MouseEvent, useState } from 'react';
import { SelectProps } from './select.types';

export const Select = ({
	options,
	selected,
	disabled,
	defaultLabel,
	onSelect,
}: SelectProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const elementRef = useClickOutside<HTMLDivElement>(() => setOpen(false));

	const label =
		options.find((option) => option.value === selected)?.label ||
		defaultLabel;
	const displayOptions = options.filter((option) =>
		option.label.toLowerCase().includes(search.toLowerCase())
	);

	const handleSelect = (
		event: MouseEvent<HTMLDivElement>,
		value: string | number
	) => {
		event.stopPropagation();
		onSelect(value === selected ? null : value);
		setOpen(false);
	};

	const handleOpen = () => {
		if (disabled) {
			return;
		}

		setOpen(!open);
	};

	return (
		<div
			ref={elementRef}
			onClick={handleOpen}
			className={clsx(
				'flex items-center justify-between cursor-pointer w-40 px-[16px] py-[12px] rounded-[22px] transition-all relative',
				{
					'bg-[#323232]': !open,
					'bg-[#00BD90]': open,
					'cursor-not-allowed': disabled,
				}
			)}>
			<p className="text-[#F2F2F2] text-sm text-ellipsis overflow-hidden whitespace-normal">
				{label}
			</p>
			<Triangle
				className={clsx('transition-all', {
					'transform rotate-180': open,
				})}
			/>
			<div
				className={clsx(
					'absolute w-[250px] rounded-[12px] bg-[#fff] top-[120%] left-0 transition-all overflow-hidden flex flex-col items-center',
					{
						'h-[300px] px-[8px] py-[16px]': open,
						'h-0 p-0': !open,
					}
				)}>
				<input
					value={search}
					placeholder="Search..."
					onClick={(event) => event.stopPropagation()}
					className="w-[220px] text-xs focus:outline-none"
					onChange={(event) => setSearch(event.target.value)}
				/>
				{displayOptions.length ? (
					<div className="flex flex-col mt-[12px] w-[234px] overflow-scroll">
						{displayOptions.map((option) => (
							<div
								key={option.value}
								onClick={(event) =>
									handleSelect(event, option.value)
								}
								className="px-[8px] py-[8px] hover:bg-[#f1f1f1] rounded-[12px]">
								<p className="text-sm text-ellipsis overflow-hidden whitespace-normal">
									{option.label}
								</p>
							</div>
						))}
					</div>
				) : (
					<div className="flex items-center justify-center h-[100%]">
						<p className="text-sm">No items found</p>
					</div>
				)}
			</div>
		</div>
	);
};
