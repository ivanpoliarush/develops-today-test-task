import { Model } from '@/shared/types/model';
import { create } from 'zustand';
import { getVehicleModels } from '../api/vehicle';
import { INITIAL_YEAR } from '../constants';
import { FiltersState } from '../types/filters-state';

export const useFilters = create<FiltersState>((set) => ({
	loading: true,
	modelId: null,
	year: null,
	yearsList: [],
	modelsList: [],

	fetchData: async () => {
		try {
			const currentYear = new Date().getFullYear();
			const yearsList = Array.from({
				length: currentYear - INITIAL_YEAR + 1,
			}).map((_, index) => INITIAL_YEAR + index);

			set({ yearsList });

			const modelsResponse = await getVehicleModels();
			const modelsList = modelsResponse.Results.map<Model>((model) => ({
				id: model.MakeId,
				name: model.MakeName,
			}));

			set({ modelsList });
		} catch (error) {
			console.error('Failed to fetch data', error);
		} finally {
			set({ loading: false });
		}
	},
	setModelId: (modelId: string | null) => set({ modelId }),
	setYear: (year: number | null) => set({ year }),
}));
