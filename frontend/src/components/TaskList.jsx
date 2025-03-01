const TaskList = ({ tasks }) => {
    return (
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  