import PropTypes from 'prop-types';
/**
 * TodoItem component represents a single task in the TODO list.
 * It displays the task text and provides buttons to delete the task,
 * move the task up, and move the task down in the list.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.task - The text of the task.
 * @param {function} props.deleteTaskCallback - Callback function to delete the task.
 * @param {function} props.moveTaskUpCallback - Callback function to move the task up in the list.
 * @param {function} props.moveTaskDownCallback - Callback function to move the task down in the list.
 */
function TodoItem({ task, deleteTaskCallback, moveTaskUpCallback, moveTaskDownCallback }) {
  return (
      <li>
          <span className="text">{task}</span>
          <button className="delete-button" onClick={() => deleteTaskCallback()}>
              🗑️
          </button>
          <button className="up-button" onClick={() => moveTaskUpCallback()}>
              ⇧
          </button>
          <button className="down-button" onClick={() => moveTaskDownCallback()}>
              ⇩
          </button>
      </li>
  );
}

TodoItem.propTypes = {
    task: PropTypes.string.isRequired,
    deleteTaskCallback: PropTypes.func.isRequired,
    moveTaskUpCallback: PropTypes.func.isRequired,
    moveTaskDownCallback: PropTypes.func.isRequired,
};

export default TodoItem;