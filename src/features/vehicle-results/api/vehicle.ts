'use server';

import { api } from '@/shared/api';
import { VehiclesResponse } from '../types/api';

export const getVehicles = async (year: number, modelId: number) => {
	try {
		const { data } = await api.get<VehiclesResponse>(
			`/vehicles/GetModelsForMakeIdYear/makeId/${modelId}/modelyear/${year}`,
			{
				params: {
					format: 'json',
				},
			}
		);

		if (!data || !data.Results) {
			return {
				error: true,
				vehicles: [],
			};
		}

		return {
			error: false,
			vehicles: data.Results,
		};
	} catch (error) {
		console.error('Failed to get data from the server', error);
		return {
			error: true,
			vehicles: [],
		};
	}
};
