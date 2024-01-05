import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories';
import News from './components/News/News';
import Sale from './components/Sale/Sale'
import Address from './components/Address/Address' 
import BestSeller from './components/BestSeller/BestSeller'
import Stories from './components/Stories/Stories'

function App() {
  return (
      <div className='main-wrapper'>
        <Header></Header>
        <Stories></Stories>
        <Categories></Categories>
        <BestSeller></BestSeller>
        <News></News>
        <Sale></Sale>
        <Address></Address>

        <Footer></Footer>
    </div>   
  );
}

export default App;
