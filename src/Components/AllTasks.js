import "./AllTasks.css";
import data from "../data";
import { useState } from "react";

const AllTasks = () => {
	const [myTasks, setMyTasks] = useState(data);
	const taskHandler = (myId) => {
		const filteredTasks = myTasks.filter((oneTask) => {
			return oneTask.id !== myId;
		});
		setMyTasks(filteredTasks);
	};
	const allDeleteHandler = () => {
		setMyTasks([]);
	};
	return (
		<div>
			{myTasks.map((oneTask) => {
				const { id, name } = oneTask;
				return (
					<div
						key={id}
						className="one-task">
						<h4> {name} </h4>
						<button
							type="button"
							onClick={() => taskHandler(id)}>
							Delete
						</button>
					</div>
				);
			})}
			<button
				type="button"
				className="main-button"
				onClick={allDeleteHandler}>
				Delete All
			</button>
		</div>
	);
};

export default AllTasks;
