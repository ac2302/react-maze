import React from "react";

export default function Grid({ maze, cellSize }) {
	return (
		<table>
			<tbody>
				{maze.map((row) => {
					return (
						<tr>
							{row.map((cell) => {
								return (
									<td
										className="cell"
										style={{
											width: `${cellSize}px`,
											height: `${cellSize}px`,
											backgroundColor: `${cell ? "red" : "blue"}`,
										}}
										onMouseOver={() => {}}
									></td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
