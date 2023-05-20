import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function Group(props) {
  const category =  props.Category;
  const [Info, setInfo] = useState([]);


  if (window.sessionStorage.getItem("count")==0) {
    window.sessionStorage.setItem("count","1");
    api_call();
  }

  async function api_call() {
    let URL = `https://inshorts.deta.dev/news?category=${category}`;
    let response = await axios.get(URL);
    setInfo(response.data.data);

  }

  return(
    <>
    {
        Info.map(i =>{
            return <Card Title={i.title} Img={i.imageUrl} Content={i.content} Author={i.author} URL={i.readMoreUrl} Time={i.time} Date={i.date}/>;
        })
    }
    </>
  )
}

export default Group;
