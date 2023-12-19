import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let[articles,setArticles] = useState([]);

  useEffect(()=>{

    /*var url = 'https://newsapi.org/v2/everything?' +
          'q=south-africa&' +
          'from=2023-12-18&' +
          'apiKey=8e25809a096149d5ba4d480b6623f1b6';
    var req = new Request(url);

    fetch(req)
    .then((response)=> response.json())
    .then((news)=>{
      setArticles(news.articles);
    }).catch((err)=>{
      console.log(err);
    })*/

  },[])
  return (
    <div className="App">
      <h1>News App</h1>
    </div>
  );
}

export default App;
