interface SelectOption {
	value: string | number;
	label: string;
}

export interface SelectProps {
	options: SelectOption[];
	selected: string | number | null;
	onSelect: (option: string | number | null) => void;
	defaultLabel: string;
	disabled?: boolean;
}
