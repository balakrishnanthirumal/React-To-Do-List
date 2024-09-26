import {useState} from "react";
import "./index.css";

function Todo() {
    
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState("")
    function generatID(){
        return Math.floor(Math.random() * 100)
    }

    const handleSubmit = () =>{
        setTodo(todo => 
            todo.concat({
                text: input,
                id:generatID(),
            })
        );
            setInput("")
     
    }

    const removeTodo = (id) =>{
        return setTodo(todo => todo.filter((t) => t.id !== id))
    }

return (
  <>
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todo-list">
        
        {todo.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
);
}

export default Todo;