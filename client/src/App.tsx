import './App.css'
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'

function App() {
 

  return (
    <>
      <div className='bg-gray-100 h-screen '>
        <Header/>
        <Routes>
          <Route path='/' />
        </Routes>
      </div>
    </>
  )
}

export default App
