import { getYearList } from '@/shared/lib/date';
import { Model } from '@/shared/types/model';
import { create } from 'zustand';
import { getVehicleModels } from '../api/vehicle';
import { INITIAL_YEAR } from '../constants';
import { FiltersState } from '../types/filters-state';

export const useFilters = create<FiltersState>((set) => ({
	loading: true,
	fetchError: false,
	modelId: null,
	year: null,
	yearsList: [],
	modelsList: [],

	fetchData: async () => {
		try {
			const yearsList = getYearList(
				INITIAL_YEAR,
				new Date().getFullYear()
			);

			set({ yearsList });

			const modelsResponse = await getVehicleModels();
			const modelsList = modelsResponse.Results.map<Model>((model) => ({
				id: model.MakeId,
				name: model.MakeName,
			}));

			set({ modelsList });
		} catch (error) {
			set({ fetchError: true });
			console.error('Failed to fetch data', error);
		} finally {
			set({ loading: false });
		}
	},
	setModelId: (modelId: string | null) => set({ modelId }),
	setYear: (year: number | null) => set({ year }),
}));
