export default function News(props) {
  return (
    <div className="news">
        <div className="news-img">
            {
                props.article.urlToImage!==null?
                <img src={props.article.urlToImage}/>:
                <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"/>
            }
        </div>
        <h1>{props.article.title}</h1>
        <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="_target">See more</a></p>
        <div className="source">
            <p>Author: {props.article.author}</p>
            <p>{props.article.source.name}</p>
        </div>
    </div>
  )
}