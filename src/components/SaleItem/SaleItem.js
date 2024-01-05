import { useState } from 'react';
import './SaleItem.css';  

function SaleItem({title, new_price, old_price, instock, pair, img_url}){
    const [count, setCount] = useState(0);

    const minusItem = () => {
        setCount(Math.max(count - 1, 0));
    }

    const addItem = () =>{
        setCount(count + 1);
    }

    return (
        <div className='sale-item-wrapper'>
             <div className='sale-item'>  
            <img className='img_url' src={img_url} alt='' />
            <p className='sale-item-title'>{title}</p>
            <div className='price-container'>
                <p className='new-price'>{new_price} с</p>
                <p className='old-price'>{old_price} с</p> 
            </div>
            <div>
                <p className='instock'>В наличии</p>
                <p className='pair'>Комплект</p>
            </div>
            <div className='cnt-container'>
                <svg className='minus-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={minusItem}>
                <path d="M19 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="black"/>
                </svg>
                
                <span className="counter">{count}</span>

                <svg className='add-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={addItem}>
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black"/>
                </svg>
            </div>
        
        </div>
        </div>
    )
} 

export default SaleItem; 