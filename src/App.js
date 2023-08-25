
import './App.css';
import Card from './Components/cards/Card';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';

function App() {
  return (
    <div className='container-fluid m-0'>
     <Header />
     <Hero />
     <Card />
    </div>
  );
}

export default App;
