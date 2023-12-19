import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let[articles,setArticles] = useState([]);

  useEffect(()=>{

    var url = 'https://newsapi.org/v2/everything?' +
          'q=Gaming&' +
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

  },[])
  return (
    <div className="App">
      <header className='header'>
        <h1>News 101</h1>
        <input type="text" placeholder='Search News'></input>
      </header>
      <section className='news-articles'>
        {
          articles.map((article)=>{
            return(
              <News article = {article}/>
            )
          })
        }
      </section>
      
    </div>
  );
}

export default App;
