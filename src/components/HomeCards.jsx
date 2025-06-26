import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCards = () => {
	return (
		<section className="py-4">
			<Container>
				<Row className="g-4">
					<Col md={6}>
						<Card className="shadow-sm h-100 custom-bg-gray">
							<Card.Body>
								<Card.Title className="fs-3 fw-bold">View Tasks</Card.Title>
								<Card.Text className="fs-5">
									Browse and manage all your tasks in one place.
								</Card.Text>
								<Button
									as={Link}
									to="/tasks"
									variant="primary"
									className="text-white custom-btn-dark">
									Go to Tasks
								</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col md={6}>
						<Card className="shadow-sm h-100 custom-bg-indigo">
							<Card.Body>
								<Card.Title className="fs-3 fw-bold">Add New Task</Card.Title>
								<Card.Text className="fs-5">
									Quickly create a new task to stay on track.
								</Card.Text>
								<Button
									as={Link}
									to="/add-task"
									className="text-white custom-btn-indigo">
									Add Task
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HomeCards;
