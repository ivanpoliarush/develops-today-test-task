import { getAllStaticParams } from '@/features/vehicle-results/api/static';
import { Param } from '@/features/vehicle-results/types/static';
import { VehicleResultsPage } from '@/features/vehicle-results/ui/main/main';
import { Suspense } from 'react';

const generateStaticParams = async () => {
	const result = await getAllStaticParams();
	return result;
};

const VehicleResultsPageWrapper = async ({
	params,
}: {
	params: Promise<Param>;
}) => {
	const { year, modelId } = await params;

	return (
		<Suspense>
			<VehicleResultsPage year={+year} modelId={+modelId} />
		</Suspense>
	);
};

export { generateStaticParams };
export default VehicleResultsPageWrapper;
