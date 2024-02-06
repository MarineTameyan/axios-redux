import {combineReducers, configureStore, Tuple} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import todoSlice from './reducers/toDoSlice/todoSlice';

const rootReducer = combineReducers({
    todoSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch