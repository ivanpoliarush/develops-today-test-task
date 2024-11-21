import { ButtonProps } from './button.props';

export const Button = ({ label }: ButtonProps) => {
	return (
		<button className="w-[100%] rounded-[22px] bg-[#00BD90] text-[#F2F2F2] hover:opacity-80 active:opacity-60 transition-all h-11 sm:w-40">
			{label}
		</button>
	);
};
