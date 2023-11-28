import { useSelector } from "react-redux";
import todos from "../redux/modules/todos";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams().id;
  const todos = useSelector((state)=>state.todos)

  return <div>상세페이지
    {
    todos.filter((todo)=> todo.id===id)
    .map((todo)=> {
      return <>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      </>
    })
    }

  </div>;
};

export default Detail;
