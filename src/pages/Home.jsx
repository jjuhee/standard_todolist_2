import React from "react";
import Form from "../components/todos/Form";
import List from "../components/todos/List";
import Header from "../components/ui/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );
};

export default Home;
