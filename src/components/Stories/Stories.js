import StoryItem from "../StoryItem/StoryItem" 
import storiesData from "./storiesData.json"

function Stories(){

    return (
        <div className='container'> 
            {storiesData.map((item, index) => (
                <StoryItem
                title = {item.title}
                img_url={item.img_url}
                />
            ))}
        </div>
    )
} 

export default Stories; 