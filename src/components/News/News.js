import NewsItem from '../NewsItem/NewsItem'
import newsData from './newsData.json' 


function News(){
    return( 
        <div className='container'>
        <h2 className='title'> Новости</h2> 

        <div className='container-slider'>
            {newsData.map((item, index) => (
                <NewsItem
                    key = {index}
                    title = {item.title} 
                    subtitle = {item.subtitle} 
                    url = {item.url}
                />
            ))}
        </div>
    </div>
    )
} 

export default News; 