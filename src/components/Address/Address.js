import AddressItem from "../AddressItem/AddressItem";


function Address(){

    return (

        <div className='container'>
        <h2 className='title'> Адреса магазинов</h2> 
        <AddressItem
            name = "Iskender home"
            map_url= "bla"
            address= "Кыргызстан, г. Бишкекул. Турусбекова A167"
            time = "08:00 - 22:00"
            phone = "+996 500 345 345"
        />

        <AddressItem
                    name = "Iskender home"
                    map_url= "bla"
                    address= "Кыргызстан, г. Бишкек ул. Лермонтова 6"
                    time = "08:00 - 22:00"
                    phone = "+996 500 345 345"
                />

        <AddressItem
                    name = "Iskender home"
                    map_url= "bla"
                    address= "Кыргызстан, г. Бишкек ул. Льва-Толстого 19"
                    time = "08:00 - 22:00"
                    phone = "+996 500 345 345"
                />
    </div>
    ) 
} 

export default Address; 