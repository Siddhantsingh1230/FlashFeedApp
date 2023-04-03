import React from 'react';
import NewsItem from './NewsItem';
const News = (props) =>{
  if(props.info!=null){
  return (
    <div className="container-fluid row">
    {
    
      props.info.map((item,index)=>{
        return (
          <NewsItem item={item} key={index}/>
          ) 
      })
    
    }
    </div>
    );
  }
  else{
    return (
    <div className="container-fluid row">
    <h1 className='lead h1 display-1'>Loading....</h1>
    </div>
    )
  }
}
export default News;