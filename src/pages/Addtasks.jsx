import FormToAddTask from '../components/FormToAddTask';
import NavigationBar from '../components/Navigationbar';
import { Container, Form, Button } from 'react-bootstrap';

const Addtasks = () => {
	return (
		<>
			<NavigationBar />
			<Container className="py-5">
				<h2 className="mb-4 text-center fw-bold">Add a New Contact</h2>
				<Form
					className="bg-white p-4 rounded shadow mx-auto"
					style={{ maxWidth: '600px' }}>
					<div className="d-grid">
						<FormToAddTask />
						<Button
							className="submit-btn-indigo fw-semibold"
							size="lg"
							type="submit">
							Add Task
						</Button>
					</div>
				</Form>
			</Container>
		</>
	);
};
export default Addtasks;
