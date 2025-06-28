import { Form } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';

const FormToAddTask = ({
	title,
	setTitle,
	description,
	setDescription,
	status,
	setStatus,
	disableTextFields = false,
}) => {
	const options = [
		{ value: 'New', label: 'New' },
		{ value: 'In progress', label: 'In progress' },
		{ value: 'Completed', label: 'Completed' },
	];

	return (
		<>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label className="fw-semibold">Task Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="e.g. Submit project report"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
					disabled={disableTextFields}
				/>
				<Form.Control.Feedback type="invalid">
					Task title is required.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3" controlId="description">
				<Form.Label className="fw-semibold">Task Description</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Briefly describe the task.."
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
					disabled={disableTextFields}
				/>
				<Form.Control.Feedback type="invalid">
					Task description is required.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3" controlId="status">
				<Form.Label className="fw-semibold">Task Status</Form.Label>
				<CreatableSelect
					options={options}
					placeholder="Select a status"
					value={status}
					onChange={setStatus}
				/>
			</Form.Group>
		</>
	);
};
export default FormToAddTask;
