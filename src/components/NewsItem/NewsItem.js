import './NewsItem.css'

function NewsItem({title, subtitle, url}){
    
    return (
        <div className="news-item">
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{url}</p>
        </div>
    )
}

export default NewsItem; 