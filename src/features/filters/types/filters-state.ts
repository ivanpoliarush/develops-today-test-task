export interface FiltersState {
	modelId: string | null;
	year: number | null;

	setModelId: (modelId: string | null) => void;
	setYear: (year: number | null) => void;
}
