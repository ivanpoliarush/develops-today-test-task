import { getVehicles } from '../../api/vehicle';
import { Title } from '../title/title';
import { VehicleResultsPageProps } from './main.props';

export const VehicleResultsPage = async ({
	year,
	modelId,
}: VehicleResultsPageProps) => {
	const vehicles = await getVehicles(year, modelId);

	return (
		<div className="flex flex-col items-center justify-center h-[100vh]">
			{vehicles && vehicles.length > 0 ? (
				<div>
					<Title label="Search result" />
					<div className="flex flex-wrap max-w-[80%] mx-auto justify-center gap-[12px]">
						{vehicles.map((vehicle) => (
							<div
								className="bg-[#323232] px-[16px] py-[12px] rounded-[22px]"
								key={vehicle.Model_ID}>
								<p className="text-[#F2F2F2] text-sm text-ellipsis overflow-hidden whitespace-normal max-w-[250px]">
									{vehicle.Model_Name}
								</p>
							</div>
						))}
					</div>
				</div>
			) : (
				<Title label="No results found" />
			)}
		</div>
	);
};
