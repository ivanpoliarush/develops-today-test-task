'use server';

import { api } from '@/shared/api';
import { VehiclesResponse } from '../types/api';

export const getVehicles = async (year: number, modelId: number) => {
	const { data } = await api.get<VehiclesResponse>(
		`/vehicles/GetModelsForMakeIdYear/makeId/${modelId}/modelyear/${year}`,
		{
			params: {
				format: 'json',
			},
		}
	);

	return data?.Results;
};
