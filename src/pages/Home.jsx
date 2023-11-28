import React, { useState } from "react";
import Head from "../components/Head";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const Home = () => {

  return <div>
    <Head/>
    <InputForm/>
    <h1>할일</h1>
    <TodoList isActive={false}/>
    <h1>완료 목록</h1>
    <TodoList isActive={true}/>
      

  </div>;
};

export default Home;
