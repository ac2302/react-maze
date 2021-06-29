import { react, useState } from "react";
import Grid from "./Grid";

function App() {
	const [width, setWidth] = useState(10);
	const [height, setHeight] = useState(5);
	const [cells, setCells] = useState(
		Array(height)
			.fill(1)
			.map(() =>
				Array(width)
					.fill(1)
					.map(() => {
						return 0;
					})
			)
	);

	let [cellSize, setCellSize] = useState(10);

	return (
		<>
			<Grid maze={cells} cellSize={cellSize} />
		</>
	);
}

export default App;
