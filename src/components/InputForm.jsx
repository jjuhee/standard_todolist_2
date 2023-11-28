import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/modules/todos";
import shortid from "shortid";


const InputForm = () => {
  const [title,setTitle] = useState("");
  const [content, setContents] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      content,
      isDone:false,
    }
    dispatch(add_todo(newTodo));
    setTitle("")
    setContents("")
  }

  return <div>
    <form onSubmit={handleSubmit} >
        <label>제목</label><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>내용</label><input type="text" value={content} onChange={(e)=>setContents(e.target.value)} />
        <button type="submit">입력</button>
    </form>

  </div>;
};

export default InputForm;
