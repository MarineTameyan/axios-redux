import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodoList, deleteTodoList, editTodoList} from './store/reducers/auth/extra-actions';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {getTodoList} from './store/reducers/auth/extra-actions';
import {IToDoItem} from "./models/user.model";

function App() {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<null | string>(null);

    const dispatch = useAppDispatch();

    const loader = useAppSelector(state => state.todoSlice.loader);
    const list = useAppSelector(state => state.todoSlice.list);
    useEffect(() => {
        dispatch(getTodoList())
    }, []);
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    dispatch(addTodoList({value: inputValue}));
                    setInputValue('');
                    dispatch(getTodoList() as any);
                }}
            >
                {loader ? "Loading..." : "Click me"}
            </button>

            <div>
                {list.map((item, index) => (
                    <div key={index}>
                        <p>{item.value}</p>
                        <button
                            onClick={() => {
                                if (item._id) {
                                    const todoIdToDelete: string = item._id;
                                    const x = dispatch(deleteTodoList(todoIdToDelete))
                                    x.then(() => {
                                            dispatch(getTodoList())
                                        }
                                    )
                                }
                            }}
                        >
                            X
                        </button>
                        <button
                            onClick={() => {
                                if (item._id) {
                                    setSelectedItem(item._id);
                                    dispatch(editTodoList({_id: item._id, value: 'New Value'}));
                                }
                            }}
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
