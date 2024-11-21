import { Model } from '@/shared/types/model';

export interface FiltersState {
	loading: boolean;
	modelId: string | null;
	year: number | null;
	yearsList: number[];
	modelsList: Model[];

	fetchData: () => Promise<void>;
	setModelId: (modelId: string | null) => void;
	setYear: (year: number | null) => void;
}
