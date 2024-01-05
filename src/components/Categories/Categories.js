import CategoryItem from "../CategoryItem/CategoryItem";
import allCategories from './categoriesData.json';

function Categories(){

    return (
        <div className='container'>
        <h2 className= "title"> Категории </h2>

        {allCategories.map((category, index) => (
        <CategoryItem
          key={index}
          title={category.title}
          amount={category.amount}
          img_url={`${process.env.PUBLIC_URL}${category.img_url}`}
        />
      ))}
   
    </div>
    )
} 


export default Categories; 