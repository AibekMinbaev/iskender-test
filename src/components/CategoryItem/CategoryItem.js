import './CategoryItem.css'; 

function CategoryItem({title, amount, img_url}){
    return(
        <div className='category'>
            <p className="category-title">{title}</p>
            <p className="category-amount">{amount} товаров</p>
            <div className='category-img-container'>
                <img className="category-img" src={img_url} alt='' />
            </div>
        </div>
    )
} 

export default CategoryItem; 
