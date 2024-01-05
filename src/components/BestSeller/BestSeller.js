import BestSaleItem from "../BestSaleItem/BestSaleItem";
import bestSellerData from './bestsellerData.json'

function BestSeller(){
    return (
        <div className='container'>
        <h2 className='title'> Хиты продаж</h2> 

        <div className='container-slider'>
        {bestSellerData.map((item, index) => (
                <BestSaleItem
                    key = {index}
                    title = {item.title}
                    price = {item.price} 
                    instock={item.instock} 
                    pair={item.pair} 
                    img_url={item.img_url}
                ></BestSaleItem>
                ))}
            </div>
    </div>

    )
} 


export default BestSeller;