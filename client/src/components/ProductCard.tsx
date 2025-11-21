import { Button } from "./ui/button"
import rolex from '../assets/rolex.jpg'
import ford from '../assets/ford.jpg'
import tesla from '../assets/tesla.jpg'
import monster from '../assets/monster.jpg'
import ferrari from '../assets/ferrari.jpg'
import jet from '../assets/jet.jpg'

function ProductCard() {

const products = [
    
{name: 'Rolex', price: 15000, img: rolex },
{name: 'Ford F 150', price: 30000, img: ford },
{name: 'Tesla', price: 75000, img: tesla },
{name: 'Monster Truck', price: 150000, img: monster},
{name: 'Ferarri', price: 250000, img: ferrari },
{name: 'Private Jet', price: 20000000, img: jet },
{name: 'Hellicopter', price: 31000000 },
{name: 'Yachts', price: 7500000 },
{name: 'Mansion', price: 45000000 },
{name: 'Acre Of Land', price: 10000 },
{name: 'Apartment', price: 200000 },
{name: 'Cruise Ship', price: 930000000 },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 ">
        {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-3 w-[20rem] max-w-sm m-0">
                <div>
                    <img src={product.img} alt={product.name} className="h-60 w-full object-cover rounded-md"/>
                    <div className="m-2 border-b flex flex-col items-center justify-center">
                        <h2 className="text-black font-bold text-2xl">{product.name}</h2>
                        <p className="text-green-500 font-bold text-xl">${product.price}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button className="w-[6rem]">Sell</Button>
                    <Button className="w-[6rem]">Buy</Button>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default ProductCard