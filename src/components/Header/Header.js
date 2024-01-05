import './Header.css'; 

function Header(){
    return (
        <header className='header'>
            <div className='header-inner'>
                <img className='logo' src={'images/Logo.svg'} alt='' />
                
                <div className='category-container'>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                            <rect width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                            <rect y="4" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                            <rect y="8" width="15" height="1" rx="0.5" fill="#D9D9D9"/>
                        </svg> 
                    </i>
                    <button className='categoryButton'>Каталог</button>
                </div>

                    <div className='search-container'>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <circle cx="9.77566" cy="8.82491" r="6.74142" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.4644 13.8638L17.1075 16.4999" stroke="#949494" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                        <input className='search-input' type="text" placeholder="Поиск"/>
                    </div>
                    <div className='login'>
                        <div>
                            <p>Добро пожаловать</p>
                            <h2>Вход/Регистрация</h2>
                        </div>
                        
                        <div className='small-circle'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                            <circle cx="6.2017" cy="4.15531" r="3.38444" stroke="#BEBEBE" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833263 12.2468C0.832354 12.0089 0.885565 11.7739 0.98887 11.5596C1.31305 10.9112 2.22724 10.5676 2.98582 10.412C3.53291 10.2952 4.08755 10.2172 4.64562 10.1785C5.67885 10.0878 6.71804 10.0878 7.75127 10.1785C8.30929 10.2177 8.8639 10.2956 9.41107 10.412C10.1696 10.5676 11.0838 10.8788 11.408 11.5596C11.6158 11.9964 11.6158 12.5037 11.408 12.9406C11.0838 13.6213 10.1696 13.9325 9.41107 14.0817C8.86462 14.2033 8.30978 14.2834 7.75127 14.3216C6.9103 14.3929 6.06542 14.4059 5.22266 14.3605C5.02815 14.3605 4.84013 14.3605 4.64562 14.3216C4.0892 14.2839 3.53648 14.2037 2.9923 14.0817C2.22724 13.9325 1.31953 13.6213 0.98887 12.9406C0.886092 12.7237 0.832935 12.4868 0.833263 12.2468Z" stroke="#BEBEBE" stroke-width="1.0625" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                         </div>
                    </div>

                  

                    <div class='vertical-line'></div>

                    <div className='small-circle'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M0.706665 1.0144L1.59123 1.19132C2.20021 1.31311 2.65827 1.81828 2.72007 2.43624L2.8452 3.68758M2.8452 3.68758L3.61237 10.0806C3.69758 10.7907 4.30001 11.3252 5.01525 11.3252H12.1419C13.2765 11.3252 14.2656 10.553 14.5408 9.45225L15.4772 5.70656C15.7336 4.68102 14.9579 3.68758 13.9008 3.68758H2.8452Z" stroke="#0063A9" stroke-width="1.05971" stroke-linecap="round"/>
                            <path d="M9.36803 6.54688H5.70197" stroke="#0063A9" stroke-width="1.05971" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="5.67079" cy="13.9982" r="1.14564" fill="#0063A9"/>
                            <circle cx="12.5444" cy="13.9982" r="1.14564" fill="#0063A9"/>
                        </svg>
                    </div>
                   

            </div>
        </header>
    )
} 

export default Header; 