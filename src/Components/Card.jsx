import React from "react";
import './Card.css';

function Card(props){
    return(
        <div className="card">
  <img src={props.Img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{props.Title}</h4>
    <p>Article by {props.Author} / {props.Time} on {props.Date}</p>
    <p className="card-text">{props.Content}</p>
    <a href={props.URL} className="btn btn-secondary" target="_blank">Read Full Article</a>
  </div>.

</div>
    );
}

export default Card;