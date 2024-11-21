export interface VehiclesResponse {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: VehicleResponse[];
}

export interface VehicleResponse {
	Make_ID: number;
	Make_Name: string;
	Model_ID: number;
	Model_Name: string;
}
