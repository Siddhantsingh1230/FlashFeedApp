import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
//import {info as news} from './NewsApi'; For Sample Use 
import './App.css';
import './components/Footer.css';


function App() {
  let homeKeyword=['nature','photography','drama','kpop','art','dance','music','religion','god','scriptures','ancient','tech','history','bank','ai','google','Business', 'Politics', 'Sports','Entertainment','India','crime','reports','suicide','bank','crisis','environment','globalwarming','earth','future','wildlife','indegenious','army','war','prices','stock','company','food','climate','asia','russia','usa','russia','cricket','games','cimema','movies','scifi','webseries','internet','sensation','suicide','upcoming','future','life','nature','science','knowledge'];
  
  function randKeyword(){
    return (homeKeyword[(Math.random()*homeKeyword.length).toFixed(0)]);
  }
  const [keyword,setKeyword]=useState(randKeyword());
  const [apiKey,setApiKey]=useState("1391365e3eac48a8a62c51eaea839629");
  const [url,setUrl]=useState('https://newsapi.org/v2/everything?q='+keyword+'&apiKey='+apiKey);
  const [info,setInfo]=useState(null);
  function NewsData(){
    fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if(data.articles.length>0){
    // data.articles.length=10;
    setInfo(data.articles);
    }
    else{
      setApiKey('5053feb71cad47108b8836b9e4d0624c');
      NewsData();
    }
  }).catch(function(){
    alert('Low Network or Failed to Connect');
  });

}

useEffect(()=>{NewsData()},[keyword]);
useEffect(()=>{
   fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if(data.articles.length>0){
    data.articles.length-=30;
    setInfo(data.articles);
    }
    else{
      setApiKey('5053feb71cad47108b8836b9e4d0624c');
      NewsData();
    }
  }).catch(function(){
    alert('Low Network or Failed to Connect');
  });
  
},[]);
  function changeKeyword(value){
    setKeyword(value);
    setUrl('https://newsapi.org/v2/everything?q='+value+'&apiKey='+apiKey);
  }
  return (
    <div className="body">
      <Navbar  keyword={changeKeyword}/>
      <News info={info}/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
