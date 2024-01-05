import './Footer.css'; 

function Footer(){
    return (
        <footer className='footer'>
            <div className='inner-footer'> 
                <div className='inner-footer-items'> 
                    <div> 
                        <img className='footer-logo' src={'images/Logo.svg'} alt=''/>
                        <p className='slogan'>Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»</p>
                        <img className='appstore' src={'images/Appstore.svg'} alt=''/>
                        <img className='appstore' src={'images/google-play.svg'} alt=''/>
                    </div>
                    

                    <div className='footer-item'>
                        <p className='footer-item-title'>Адреса</p>
                        <div> 
                            <div> 
                                <p className='region'> ЭлитСтрой</p> 
                                <p className='street'>ул. Ден-Сяопина 18/1</p> 
                            </div>
                        
                            <div> 
                                <p className='region'>Баткен</p>
                                <p className='street'>ул. Льва-Толстого 19</p> 
                            </div>
                            <div>
                                <p className='region'> ТааТан</p>
                                <p className='street'>ул. Лермонтова 6</p>

                            </div>

                        </div>                    
                    </div>
                        

                    <div className='footer-item'>
                        <p className='footer-item-title'>Компания</p>

                        <div className='company'>
                            <p>Каталог</p>
                            <p>Избранное</p>
                            <p>Личный кабинет</p>
                        </div>

                    </div>

                    <div className='footer-item'>
                        <p className='footer-item-title'>Контакты</p>
                        
                        <div>
                            <div>
                                <p className='region'>Email: </p>
                                <p className='street'>iskender.kg@gmail.com</p>
                            </div>

                            <div>
                                <p className='region'>Телефон:</p>
                                <p className='street'>+996 (500) 000-104</p>
                                <p className='street'>+996 (997) 000-104</p>
                                <p className='street'>+996 (222) 000-104</p>
                            </div>
                        </div>
                      
                    </div> 

                </div>
            
                <hr className='footer-line'></hr>

                <div>
                    <p className='footer-bottom-text'>© 2023 Iskender.kg - Отечественный бренд сантехники</p>

                </div>
            </div>
        </footer>
    )
} 

export default Footer; 