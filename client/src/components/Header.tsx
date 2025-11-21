import elon from '../assets/elon.jpg'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import Profile from './Profile'

function Balance(){
    return (
        <div className='bg-green-700 h-10 text-white flex justify-center items-center font-bold text-2xl'>
        <p>Current Balance: 456,000,000,000</p>
    </div>
    )
}

function Header() {
  return (
    <div className='bg-white h-27 border border-b-gray-100 shadow-sm'>
        <Balance/>
        <div className="flex justify-between items-center px-4">
          <div className='flex flex-row gap-2 items-center p-2'>
            <img src={elon} alt="elon musk image" className='h-12 w-12 rounded-full'/>
            <h2 className='font-bold text-black text-2xl'>SPEND ELON'S MONEY</h2>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <nav className='flex gap-4 font-bold'>
            <Link to="/">Spend</Link>
            <Link to="/receipt">Receipt</Link>
          </nav>
          <Button>AC</Button>
          <div className='h-15 w-15 rounded-full bg-gray-200 flex justify-center items-center font-bold text-2xl'>
            <Profile/>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Header