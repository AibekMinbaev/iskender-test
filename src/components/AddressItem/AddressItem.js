import './AddressItem.css'; 

function AddressItem({name, map_url, address, time, phone}){

    return(

        <div className='address-item'>
            <p className='address-name'>{name}</p>
            <p className='map-url'>открыть на карте</p> 
            <p className='address'>{address}</p>
            <p className='time' > {time}</p> 
            <p className='phone'> {phone} </p>
        </div>
    )
}

export default AddressItem; 