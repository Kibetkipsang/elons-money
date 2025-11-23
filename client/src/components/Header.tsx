import { useState } from 'react'
import elon from '../assets/elon.jpg'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import Profile from './Profile'
import { useProductStore } from '@/stores/ProductStore'

function Balance(){

  const netWorth = useProductStore((state: any) => state.netWorth);

     return (
        <div className='bg-green-700 h-10 text-white flex justify-center items-center font-bold text-2xl'>
        <p>Current Balance: {netWorth}</p>
    </div>
    )
}

function Header() {
  const resetProducts = useProductStore((state: any) => state.reset);
  const [showModal, setShowModal ] = useState(false);


  const handleConfirmReset = () => {
    resetProducts(); 
    setShowModal(false);
  };
  return (
    <div className='bg-white h-27 border border-b-gray-100 shadow-sm fixed w-full top-0 z-50'>
        <Balance/>
        <div className="flex justify-between items-center px-4">
          <div className='flex flex-row gap-2 items-center p-2'>
            <img src={elon} alt="elon musk image" className='h-12 w-12 rounded-full'/>
            <h2 className='font-bold text-black text-2xl'>SPEND ELON'S MONEY</h2>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <nav className='flex gap-4 font-bold '>
            <Link to="/" className='hover:underline'>Spend</Link>
            <Link to="/receipt" className='hover:underline'>Receipt</Link>
          </nav>
          <Button onClick={() => setShowModal(true)}>AC</Button>
          <div className='h-15 w-15 rounded-full bg-gray-200 flex justify-center items-center font-bold text-2xl'>
            <Profile/>
          </div>
        </div>
        </div>
        {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <Card className="max-w-md w-full p-4">
            <CardHeader>
              <CardTitle className='font-bold text-2xl'>Sell Items?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" font-medium text-gray-600">
                You are about to sell everything that you posses. This will bring your worth back to $456,000,000,000
              </p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleConfirmReset}>Confirm</Button>
            </CardFooter>
          </Card>
        </div>
      )}

    </div>
  )
}

export default Header