import { getVehicleModels } from '@/features/filters/api/vehicle';
import { INITIAL_YEAR } from '@/features/filters/constants';
import { getYearList } from '@/shared/lib/date';
import { Param } from '../types/static';

export const getAllStaticParams = async () => {
	const years = getYearList(INITIAL_YEAR, new Date().getFullYear());
	const modelsResponse = await getVehicleModels();

	const result: Param[] = [];

	for (const year of years) {
		for (const model of modelsResponse.Results) {
			const params = {
				year: year.toString(),
				modelId: model.MakeId.toString(),
			};

			result.push(params);
		}
	}

	return result;
};
