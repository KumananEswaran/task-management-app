import {
	Card,
	Button,
	Col,
	Row,
	Container,
	Badge,
	Spinner,
} from 'react-bootstrap';
// import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const TaskCards = () => {
	// const [tasks, setTasks] = useState([]);

	// useEffect(() => {
	// 	const fetchContacts = async () => {
	// 		try {
	// 			const res = await axios.get(
	// 				'https://taskmanagement-backend-ten.vercel.app/tasks'
	// 			);
	// 			setTasks(res.data);
	// 		} catch (error) {
	// 			console.error('Error fetching, contacts:', error);
	// 		}
	// 	};
	// 	fetchContacts();
	// }, []);

	const {
		data: tasks,
		error,
		isLoading,
		// mutate,
	} = useSWR('https://taskmanagement-backend-ten.vercel.app/tasks', fetcher);

	if (error) return <p className="mt-4 text-danger">Error loading contacts</p>;
	if (isLoading)
		return (
			<div className="text-center mt-4">
				<Spinner animation="border" role="status" />
				<p>Loading</p>
			</div>
		);

	return (
		<Container>
			<Row className="g-4">
				{tasks.map((task) => (
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
								<Button className="edit-btn-indigo me-2">Update Status</Button>
								<Button variant="danger">Delete</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};
export default TaskCards;
