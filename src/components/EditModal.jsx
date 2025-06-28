import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import FormToAddTask from './FormToAddTask';

const EditModal = ({ show, handleClose, task, mutate }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');

	const [saving, setSaving] = useState(false);

	useEffect(() => {
		if (task) {
			setTitle(task.title || '');
			setDescription(task.description || '');
			setStatus({ value: task.status, label: task.status });
		}
	}, [task]);

	const handleSave = async (e) => {
		e.preventDefault();

		setSaving(true);
		try {
			await axios.put(
				`https://taskmanagement-backend-ten.vercel.app/tasks/${task.id}`,
				{
					status: status.value,
				}
			);
			mutate();
			toast.success('Status updated successfully!');
			handleClose();
		} catch (error) {
			console.error(error);
			toast.error('Failed to update status');
		}
		setSaving(false);
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update Task Status</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSave}>
						<FormToAddTask
							title={title}
							setTitle={setTitle}
							description={description}
							setDescription={setDescription}
							status={status}
							setStatus={setStatus}
							disableTextFields={true}
						/>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" type="submit" disabled={saving}>
								{saving ? (
									<>
										<Spinner size="sm" animation="border" className="me-2" />
										Saving...
									</>
								) : (
									'Save Changes'
								)}
							</Button>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default EditModal;
