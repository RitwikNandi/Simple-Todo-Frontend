import Header from "./Components/Header";
import Form from "./Components/Form";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className='container'>
      <div className='todo-app'>
        <Header className='header' />
        <Form />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
