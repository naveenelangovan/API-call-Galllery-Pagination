import { useState, useEffect } from 'react';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [start, setStart] = useState(+ sessionStorage.getItem('start') ?? 0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=5`)
            .then(data => data.json())
            .then(todos => {
                setTodos(todos);
            })
            .catch(err => {
                console.error(err);
                setTodos([]);
            });
    }, [start]);

    // start 0 limit 5
    // 5 5
    // 10 5
    // 15 5

    const handlePageClick = (start) => {
        setStart(start);
        sessionStorage.setItem('start', start);
    }

    if (todos.length === 0) {
        return (<h2>No Todos available</h2>);
    }

    return (
        <>
            <h2>Todos</h2>
            <section>
                <button className={start === 0 ? 'active' : null} onClick={() =>handlePageClick(0)}>Page 1</button> {' '}
                <button className={start === 5 ? 'active' : null} onClick={() => handlePageClick(5)}>Page 2</button> {' '}
                <button className={start === 10 ? 'active' : null} onClick={() => handlePageClick(10)}>Page 3</button> {' '}
                <button className={start === 15 ? 'active' : null} onClick={() => handlePageClick(15)}>Page 4</button> {' '}
                <button className={start === 20 ? 'active' : null} onClick={() => handlePageClick(20)}>Page 5</button> {' '}
                <button className={start === 25 ? 'active' : null} onClick={() => handlePageClick(25)}>Page 6</button>
            </section>
            
            {todos.map(todo => {
                return (
                    <>
                        <div key={todo.id}>
                            <p>ID: {todo.id}</p>
                            <p>Title: {todo.title}</p>
                            <p>Status: {todo.completed === true ? "Done" : "Not Done"}</p>
                        </div>
                        <hr />
                    </>
                )
            })}
        </>
    )
}

export default Todos;