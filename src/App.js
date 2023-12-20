import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let[articles,setArticles] = useState([]);
  let[category,setCategory] = useState("gaming");

  useEffect(()=>{

    var url = 'https://newsapi.org/v2/everything?' +
          `q=${category}&` +
          'from=2023-12-18&' +
          'apiKey=8e25809a096149d5ba4d480b6623f1b6';
    var req = new Request(url);

    fetch(req)
    .then((response)=> response.json())
    .then((news)=>{
      console.log(news.articles);
      setArticles(news.articles);
    }).catch((err)=>{
      console.log(err);
    })

  },[category])
  return (
    <div className="App">
      <header className='header'>
        <h1>News 101</h1>
        <input type="text" placeholder='Search News' onChange={(event)=>{
          if(event.target.value !==""){
            setCategory(event.target.value);
          }
          else{
            setCategory("top-trending")
          }
          
        }}></input>
      </header>
      <section className='news-articles'>
        {
          articles.length!==0?
          articles.map((article)=>{
            return(
              <News article = {article}/>
            )
          })
          :
          <h3>No News Found For Searched Text</h3>
        }
      </section>
      
    </div>
  );
}

export default App;
