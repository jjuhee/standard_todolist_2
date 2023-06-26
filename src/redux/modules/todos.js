// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "리액트1",
    body: "리액트 공부하기1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트2",
    body: "리액트 공부하기2",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "리액트3",
    body: "리액트 공부하기3",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "리액트4",
    body: "리액트 공부하기4",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
