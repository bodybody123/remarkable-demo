import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';

const Show = () => {
    const [ todo, setTodo ] = useState([]);

    const fetch = async () => {
        try {
            const response = await axios.get('http://localhost:3005/');
            setTodo(response.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div>
            {todo.map((v, i) => {
                return (
                    <ReactQuill 
                        value={v.text}
                        readOnly={true}
                        theme="bubble"
                    />
                )
            })}
        </div>
    )
}

export default Show;