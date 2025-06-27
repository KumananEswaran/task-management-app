import tasks from '../tasks.json';
import { Card, Button, Col, Row, Container, Badge } from 'react-bootstrap';

const TaskCards = () => {
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
										: task.status === 'In Progress'
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
												: task.status === 'In Progress'
												? 'warning'
												: 'primary'
										}
										className={
											task.status === 'In Progress'
												? 'text-dark badge-large'
												: 'badge-large'
										}>
										{task.status}
									</Badge>
								</Card.Text>
								<Card.Text>Description: {task.description}</Card.Text>
								<Card.Text className="text-muted">
									Created at:{' '}
									{new Date(task.createdAt).toLocaleDateString('en-US', {
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
