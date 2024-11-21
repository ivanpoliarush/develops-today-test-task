'use client';

import { BackButton } from '@/assets/icons/back-button';
import { useRouter } from 'next/navigation';
import { TitleProps } from './title.props';

export const Title = ({ label }: TitleProps) => {
	const router = useRouter();

	return (
		<div className="flex items-center justify-center gap-[10px] mb-[50px] sm:gap-[20px]">
			<button
				onClick={() => router.back()}
				className="border-none background-none">
				<BackButton className="w-[30px] h-[30px] sm:w-[60px] sm: h-[60px]" />
			</button>
			<p className="text-center text-xl sm:text-5xl">{label}</p>
		</div>
	);
};
