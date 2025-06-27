import NavigationBar from '../components/Navigationbar';
import TaskCards from '../components/TaskCards';

const Taskspage = () => {
	return (
		<>
			<NavigationBar />
			<h2 className="text-center my-4">Task List</h2>
			<TaskCards />
		</>
	);
};
export default Taskspage;
