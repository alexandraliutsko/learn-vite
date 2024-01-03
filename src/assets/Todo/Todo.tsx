import "./Todo.css";
import { useState } from "react";
import {render} from "react-dom";

function Todo() {
    const [item, setItem] = useState('');
    const [list, setList] = useState(['Find a cat', 'Feed a cat']);

    const submit = (e) => {
        e.preventDefault();
        setList(list => [...list, item]);
        setItem('');
    }

    return (
        <div className="todo-page">
            <div className="page-title">It's Todo here</div>

            <div className="todo-list">
                <form className="form" onSubmit={submit}>
                    <input type="text" className="input" placeholder="New item" value={item} onChange={(e) => setItem(item => item = e.target.value)} />
                    <button className="button" onClick={submit}>Add Item</button>
                </form>
                <ul className="list">
                    {
                        list.map((item, i) => <li className="list-item" key={item + i}>{item}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Todo;