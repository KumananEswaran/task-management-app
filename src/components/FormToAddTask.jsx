import { Form } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

const FormToAddTask = () => {
	const options = [
		{ value: 'new', label: 'New' },
		{ value: 'in-progress', label: 'In-progress' },
		{ value: 'completed', label: 'Completed' },
	];

	return (
		<>
			<Form.Group className="mb-3" controlId="task">
				<Form.Label className="fw-semibold">Task Title</Form.Label>
				<Form.Control type="text" placeholder="e.g. Submit project report" />
				<Form.Control.Feedback type="invalid">
					Task title is required.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3" controlId="decription">
				<Form.Label className="fw-semibold">Task Description</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Briefly describe the task.."
				/>
				<Form.Control.Feedback type="invalid">
					Task description is required.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3" controlId="tags">
				<Form.Label className="fw-semibold">Task Status</Form.Label>
				<CreatableSelect options={options} placeholder="Select a status" />
			</Form.Group>
		</>
	);
};
export default FormToAddTask;
