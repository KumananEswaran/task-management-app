import FormToAddTask from '../components/FormToAddTask';
import NavigationBar from '../components/Navigationbar';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Addtasks = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState({ value: 'New', label: 'New' });

	const [validated, setValidated] = useState(false);

	const [submitting, setSubmitting] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
			setValidated(true);
			return;
		}
		setSubmitting(true);
		try {
			await axios.post(
				'https://taskmanagement-backend-ten.vercel.app/add-task',
				{
					title,
					description,
					status: status.value,
				}
			);
			toast.success('Task added successfully!');
		} catch (error) {
			console.error('Error saving task:', error);
			toast.error('Failed to add task. Please try again.');
		}
		setSubmitting(false);
		return navigate('/tasks');
	};

	return (
		<>
			<NavigationBar />
			<Container className="py-5">
				<h2 className="mb-4 text-center fw-bold">Add a New Task</h2>
				<Form
					noValidate
					validated={validated}
					className="bg-white p-4 rounded shadow mx-auto"
					style={{ maxWidth: '600px' }}
					onSubmit={handleSubmit}>
					<div className="d-grid">
						<FormToAddTask
							title={title}
							setTitle={setTitle}
							description={description}
							setDescription={setDescription}
							status={status}
							setStatus={setStatus}
						/>
						<Button
							className="submit-btn-indigo fw-semibold"
							size="lg"
							type="submit"
							disabled={submitting}>
							{submitting ? (
								<>
									<Spinner size="sm" animation="border" className="me-2" />
									Submitting...
								</>
							) : (
								'Add Task'
							)}
						</Button>
					</div>
				</Form>
			</Container>
		</>
	);
};
export default Addtasks;
