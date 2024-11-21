import { create } from 'zustand';
import { FiltersState } from '../types/filters-state';

export const useFilters = create<FiltersState>((set) => ({
	modelId: null,
	year: null,

	setModelId: (modelId: string | null) => set({ modelId }),
	setYear: (year: number | null) => set({ year }),
}));
