'use client';

import { Select } from '@/shared/ui/select/select';
import { useFilters } from '../../hooks/use-filters';

export const Filters = () => {
	const { modelId, year, setModelId, setYear } = useFilters();

	return (
		<div className="flex">
			<Select
				options={[]}
				selected={modelId}
				defaultLabel="Model ID"
				onSelect={(value) => setModelId(value as string | null)}
			/>
			<Select
				options={[]}
				selected={year}
				defaultLabel="Year"
				onSelect={(value) => setYear(value as number | null)}
			/>
		</div>
	);
};
