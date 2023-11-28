// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO"
const DELETE_TODO= "DELETE_TODO"
const SWITCH_TODO = "SWITCH_TODO"

export const add_todo = (payload) =>{
  return {
    type:ADD_TODO,
    payload
  }
}

export const delete_todo = (payload) =>{
  return {
    type:DELETE_TODO,
    payload
  }
}
export const switch_todo = (payload) =>{
  return {
    type:SWITCH_TODO,
    payload
  }
}

const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    content: "내용",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목2",
    content: "내용",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "제목3",
    content: "내용",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]; //TODO: 여기 작성 ..
    case DELETE_TODO:
       const deletedtodos= state.filter((todo)=>{
        return (todo.id !== action.payload)
      })
      return deletedtodos; //TODO: 여기 작성

    case SWITCH_TODO:
      const newdotodos = state.map((todo)=> {
          if(todo.id === action.payload) {
            return {...todo, isDone:!todo.isDone}
          } else {
            return todo
          }
      })
      return newdotodos; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
