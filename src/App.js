import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';

function App() {
  return (
    <div className='container mt-5'>
      <div className='card card-body text-center'>
        <h1>Task List</h1>
        <hr></hr>
        <p>Our Task List</p>

        <TaskInput/>
        <TaskTable/>
      </div>
    </div>
  );
}

export default App;
