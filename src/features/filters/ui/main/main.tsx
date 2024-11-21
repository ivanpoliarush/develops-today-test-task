'use client';

import { Select } from '@/shared/ui/select/select';
import { useEffect } from 'react';
import { useFilters } from '../../hooks/use-filters';

export const Filters = () => {
	const {
		modelId,
		year,
		loading,
		yearsList,
		modelsList,
		setModelId,
		setYear,
		fetchData,
	} = useFilters();

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex">
			<Select
				disabled={loading}
				options={modelsList.map((model) => ({
					label: model.name,
					value: model.id,
				}))}
				selected={modelId}
				defaultLabel={loading ? 'Loading...' : 'Model'}
				onSelect={(value) => setModelId(value as string | null)}
			/>
			<Select
				disabled={loading}
				options={yearsList.map((year) => ({
					label: year.toString(),
					value: year,
				}))}
				selected={year}
				defaultLabel={loading ? 'Loading...' : 'Year'}
				onSelect={(value) => setYear(value as number | null)}
			/>
		</div>
	);
};
