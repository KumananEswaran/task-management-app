import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Taskspage from './pages/Taskspage';
import Addtasks from './pages/Addtasks';
import Toast from './components/Toast';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/tasks" element={<Taskspage />} />
					<Route path="/add-task" element={<Addtasks />} />
				</Routes>
			</BrowserRouter>
			<Toast />
		</>
	);
}

export default App;
