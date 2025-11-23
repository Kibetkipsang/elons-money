import './App.css'
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Receipt from './components/Receipt';

function App() {
 

  return (
    <>
      <div className='bg-gray-100 min-h-screen '>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/receipt' element={<Receipt />}/> 
        </Routes>
      </div>
    </>
  )
}

export default App
