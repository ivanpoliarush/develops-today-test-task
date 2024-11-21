import { api } from '@/shared/api';
import { ModelsResponse } from '../types/api';

export const getVehicleModels = async () => {
	const { data } = await api.get<ModelsResponse>(
		'/vehicles/GetMakesForVehicleType/car',
		{
			params: {
				format: 'json',
			},
		}
	);

	return data;
};
