import {
	Card,
	Button,
	Col,
	Row,
	Container,
	Badge,
	Spinner,
} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import { toast } from 'react-toastify';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const TaskCards = () => {
	// const [tasks, setTasks] = useState([]);

	// useEffect(() => {
	// 	const fetchTasks = async () => {
	// 		try {
	// 			const res = await axios.get(
	// 				'https://taskmanagement-backend-ten.vercel.app/tasks'
	// 			);
	// 			setTasks(res.data);
	// 		} catch (error) {
	// 			console.error('Error fetching, tasks:', error);
	// 		}
	// 	};
	// 	fetchTasks();
	// }, []);

	const {
		data: tasks,
		error,
		isLoading,
		mutate,
	} = useSWR('https://taskmanagement-backend-ten.vercel.app/tasks', fetcher);

	// Edit status
	const [show, setShow] = useState(false);
	const [selectedTask, setSelectedTask] = useState(false);

	const handleShow = (task) => {
		setSelectedTask(task);
		setShow(true);
	};

	// Delete task
	const [showDelete, setShowDelete] = useState(false);
	const [taskToDelete, setTaskToDelete] = useState(null);
	const [deleting, setDeleting] = useState(false);

	const deleteShow = (task) => {
		setTaskToDelete(task);
		setShowDelete(true);
	};

	const deleteClose = () => {
		setTaskToDelete(null);
		setShowDelete(false);
	};

	const handleDelete = async () => {
		setDeleting(true);
		try {
			await axios.delete(
				`https://taskmanagement-backend-ten.vercel.app/tasks/${taskToDelete.id}`
			);
			mutate();
			deleteClose();
			toast.success('Task deleted successfully!');
		} catch (error) {
			console.error(error);
			toast.error('Failed to delete task');
		}
		setDeleting(false);
	};

	if (error) return <p className="mt-4 text-danger">Error loading tasks</p>;
	if (isLoading)
		return (
			<div className="text-center mt-4">
				<Spinner animation="border" role="status" />
				<p>Loading</p>
			</div>
		);

	return (
		<>
			<Container>
				<Row className="g-4">
					{tasks.data.map((task) => (
						<Col key={task.id} md={6} xl={4}>
							<Card className="m-3 shadow-sm h-100 position-relative">
								<div
									className={`position-absolute top-0 start-0 w-100 ${
										task.status === 'Completed'
											? 'bg-success'
											: task.status === 'In progress'
											? 'bg-warning'
											: 'bg-primary'
									}`}
									style={{ height: '8px' }}></div>
								<Card.Body>
									<Card.Title className="fw-bold d-flex justify-content-between align-items-center">
										{task.title}
									</Card.Title>
									<Card.Text>
										<Badge
											bg={
												task.status === 'Completed'
													? 'success'
													: task.status === 'In progress'
													? 'warning'
													: 'primary'
											}
											className={
												task.status === 'In progress'
													? 'text-dark badge-large'
													: 'badge-large'
											}>
											{task.status}
										</Badge>
									</Card.Text>
									<Card.Text>Description: {task.description}</Card.Text>
									<Card.Text className="text-muted">
										Created at:{' '}
										{new Date(task.created_at).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'short',
											day: 'numeric',
											hour: '2-digit',
											minute: '2-digit',
										})}
									</Card.Text>
									<Button
										className="edit-btn-indigo me-2"
										onClick={() => handleShow(task)}>
										Update Status
									</Button>
									<Button variant="danger" onClick={() => deleteShow(task)}>
										Delete
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<EditModal
				show={show}
				handleClose={() => setShow(false)}
				task={selectedTask}
				mutate={mutate}
			/>
			<DeleteModal
				show={showDelete}
				handleClose={deleteClose}
				handleDelete={handleDelete}
				deleting={deleting}
			/>
		</>
	);
};
export default TaskCards;
