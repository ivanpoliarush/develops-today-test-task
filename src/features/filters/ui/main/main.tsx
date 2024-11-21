'use client';

import { Button } from '@/shared/ui/button/button';
import { Select } from '@/shared/ui/select/select';
import Link from 'next/link';
import { useEffect } from 'react';
import { useFilters } from '../../hooks/use-filters';

export const Filters = () => {
	const {
		modelId,
		year,
		loading,
		yearsList,
		fetchError,
		modelsList,
		setModelId,
		setYear,
		fetchData,
	} = useFilters();

	useEffect(() => {
		fetchData();
	}, []);

	const selectLabel = (() => {
		if (loading) {
			return 'Loading...';
		}

		if (fetchError) {
			return 'Failed to fetch';
		}

		return 'Model';
	})();

	return (
		<div className="flex h-[100vh] px-[20px] gap-[24px] items-center justify-center flex-col sm:flex-row sm:px-0">
			<Select
				disabled={loading || fetchError}
				options={modelsList.map((model) => ({
					label: model.name,
					value: model.id,
				}))}
				selected={modelId}
				defaultLabel={selectLabel}
				onSelect={(value) => setModelId(value as string | null)}
			/>
			<Select
				options={yearsList.map((year) => ({
					label: year.toString(),
					value: year,
				}))}
				selected={year}
				defaultLabel="Year"
				onSelect={(value) => setYear(value as number | null)}
			/>
			<Link
				className="w-[100%] sm:w-40"
				href={`/results/${modelId}/${year}`}>
				<Button label="Next" disabled={!modelId || !year} />
			</Link>
		</div>
	);
};
