import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Taskspage from './pages/Taskspage';
import Addtasks from './pages/Addtasks';

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
		</>
	);
}

export default App;
