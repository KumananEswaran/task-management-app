import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
	return (
		<Navbar className="navbar-indigo" variant="dark" expand="md">
			<Container>
				<Navbar.Brand className="fw-bold fs-2">Task Manager</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link
							as={NavLink}
							to="/"
							className="fw-semibold fs-4 d-flex align-items-center">
							<i className="bi bi-house-door me-2"></i>Home
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/tasks"
							className="fw-semibold fs-4 d-flex align-items-center">
							<i className="bi bi-list-check me-2"></i>Tasks
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/add-task"
							className="fw-semibold fs-4 d-flex align-items-center">
							<i className="bi bi-plus-circle me-2"></i>Add Task
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
