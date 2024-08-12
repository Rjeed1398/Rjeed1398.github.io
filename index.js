/*www.almasweb.org*/
const { useState } = React;

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value);
    setValue("");
  };

  return (
    React.createElement("form", { onSubmit: handleSubmit },
    React.createElement("input", {
      type: "text",
      value: value,
      placeholder: "\u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      onChange: e => setValue(e.target.value) }),

    React.createElement("button", { type: "submit" }, React.createElement("i", { class: "fas fa-plus" }))));


};

const ToDoList = () => {

  const [tasks, setTasks] = useState([{
    text: "لایک",
    isCompleted: false },
  {
    text: "کامنت",
    isCompleted: false },
  {
    text: "اشتراک گزاری",
    isCompleted: false }]);


  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    React.createElement("div", { className: "todo-list" },
    tasks.map((task, index) =>
    React.createElement("div", { className: "todo" },
    React.createElement("span", { onClick: () => toggleTask(index), className: task.isCompleted ? "todo-text todo-completed" : "todo-text" },
    task.text),

    React.createElement("button", { onClick: () => removeTask(index) }, React.createElement("i", { class: "fas fa-trash-alt" })))),


    React.createElement(AddTaskForm, { addTask: addTask })));


};

ReactDOM.render(React.createElement(ToDoList, null), document.getElementById('app'));
/*www.almasweb.org*/
