import React from "react";
import './NewsItem.css';
const NewsItem = (props) => {
  let trimTitle=props.item.title;
  let trimDesc=props.item.description;
  if(props.item.description!=null){
   trimTitle=props.item.title.slice(0,60)+'..';
   trimDesc=props.item.description.slice(0,160)+'...';
  }
  return (
    <>
      <div className="col-md-4 mx-4 mx-md-0 Card">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.item.urlToImage} className="card-img-top obj" alt="Removed Title -Visit Official Link" />
          <div className="card-body">
            <h5 className="card-title">{trimTitle}</h5>
            <p className="card-text">{trimDesc}</p>
            <a target="_blank" rel="noopener noreferrer" href={props.item.url} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsItem;
