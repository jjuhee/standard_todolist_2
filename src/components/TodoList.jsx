import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {styled} from "styled-components"
import { delete_todo, switch_todo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const Todolist = ({isActive}) => {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(todos)

  return <div>
    {
    todos.filter((todo)=>todo.isDone===isActive)
    .map((todo)=> {
        return (
            <TodoBox key={todo.id} onClick={()=>navigate(`${todo.id}`)}>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button onClick={()=>dispatch(switch_todo(todo.id))} >{todo.isDone? "취소" : "완료"}</button> 
            <button onClick={()=>dispatch(delete_todo(todo.id))}>삭제</button>
            </TodoBox>
            )
        })
    }
  </div>;
};

export default Todolist;

const TodoBox = styled.div`
    width : 300px;
    height : 100px;
    border: 1px solid black;
    
`