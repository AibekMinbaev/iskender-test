import SaleItem from '../SaleItem/SaleItem'
import saleData from './saleData.json' 

function Sale(){

    return (

        <div className='container'>
             <h2 className='title'>Аукционные товары</h2>
           
            <div className='container-slider'>
                    {saleData.map((item, index) => (
                    <SaleItem
                        key = {index}
                        title = {item.title}
                        new_price = {item.new_price} 
                        old_price= {item.old_price} 
                        instock={item.instock} 
                        pair={item.pair} 
                        img_url={item.img_url}
                    ></SaleItem>
                ))}
            </div>
    </div>
    ) 
} 


export default Sale; 