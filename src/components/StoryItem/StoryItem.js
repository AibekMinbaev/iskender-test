import './StoryItem.css'

function StoryItem({title, img_url}){
    return (

        <div className='story-item'> 
            <img className='story-img' src={img_url} alt=''/>
            <p className='story-title'> {title} </p> 
        </div>
    )
} 

export default StoryItem; 