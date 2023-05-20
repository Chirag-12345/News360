import React, { useState} from "react";
import Header from "./Components/Header";
import Group from "./Components/Group";
import {Cat} from"./Components/Header";

function App() {
  if(!(window.sessionStorage.getItem("current")))
  {
    window.sessionStorage.setItem("current", "all");
  }
  window.sessionStorage.setItem("count", "0");

  const [category,setCategory] = useState(window.sessionStorage.getItem("current"));
  return (
    <>
    <Header setCategory={setCategory}/>
      <Group Category={category}/>
    </>
  );
}

export default App;
