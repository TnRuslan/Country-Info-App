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
		<div className="bg-gray-800 rounded-lg p-4">
			<h3 className="text-xl font-semibold mb-4 text-center">
				Population Chart
			</h3>
			<ResponsiveContainer
				width="100%"
				height={300}
				className=" bg-gray-800 rounded-lg text-white"
			>
				<LineChart
					width={400}
					height={400}
					data={data}
					margin={{
						top: 5,
						right: 20,
						left: 30,
						bottom: 5,
					}}
				>
					<Line
						type="monotone"
						dataKey="value"
						stroke="#387908"
						yAxisId={1}
					/>
					<CartesianGrid stroke="#798397" strokeDasharray="5 5" />
					<XAxis dataKey="year" tick={{ fill: '#ffffff' }} />
					<YAxis
						yAxisId={1}
						label={{
							angle: -90,
							position: 'insideLeft',
						}}
						tick={{ fill: '#ffffff' }}
					/>
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
