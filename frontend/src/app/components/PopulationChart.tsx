import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { IPopulation } from '../interfaces/country.interface';

interface PopulationChartProps {
	data: IPopulation[];
}

export default function PopulationChart({
	data,
}: PopulationChartProps): React.ReactNode {
	return (
		<div className="border-2 border-white rounded-lg p-4">
			<h3 className="text-xl font-semibold mb-4">Population Chart</h3>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					width={400}
					height={400}
					data={data}
					margin={{
						top: 5,
						right: 20,
						left: 10,
						bottom: 5,
					}}
				>
					<Line
						type="monotone"
						dataKey="value"
						stroke="#387908"
						yAxisId={1}
					/>
					<CartesianGrid stroke="#f5f5f5" strokeDasharray="5 5" />
					<XAxis dataKey="year" />
					<YAxis
						yAxisId={1}
						label={{
							value: 'Population',
							angle: -90,
							position: 'insideLeft',
						}}
					/>
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
