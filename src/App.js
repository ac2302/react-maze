import { react, useState } from "react";
import Grid from "./Grid";

function App() {
	let [cells, setCells] = useState([
		[1, 1, 1],
		[1, 0, 1],
	]);
	let [cellSize, setCellSize] = useState(10);

	return (
		<>
			<Grid maze={cells} cellSize={cellSize} />
		</>
	);
}

export default App;
