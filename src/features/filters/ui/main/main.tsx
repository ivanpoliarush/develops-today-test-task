'use client';

import { Button } from '@/shared/ui/button/button';
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
		<div className="flex h-[100vh] px-[20px] gap-[24px] items-center justify-center flex-col sm:flex-row sm:px-0">
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
			<Button label="Next" />
		</div>
	);
};
