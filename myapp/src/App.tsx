import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoList, deleteTodoList, editTodoList } from './store/reducers/auth/extra-actions';
import { useAppSelector } from './hooks/redux';
import { getTodoList } from './store/reducers/auth/extra-actions';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<null | string>(null);

  const dispatch = useDispatch();

  const loader = useAppSelector(state => state.todoSlice.loader);
  const list = useAppSelector(state => state.todoSlice.list);

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
          dispatch(addTodoList({ value: inputValue }));
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
                const todoIdToDelete = item._id;
                dispatch(deleteTodoList(todoIdToDelete))
                  dispatch(getTodoList() as any)
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                setSelectedItem(item._id);
                dispatch(editTodoList({ id: item._id, newValue: 'New Value' }));
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
