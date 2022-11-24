import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import todosReducer from "./todos.slice";
import visibilityReducer from "./visibility.slice";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    todos: todosReducer,
    visibility: visibilityReducer,
  },
});

export default store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type AppState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
