import { Button } from "./ui/button"

function ProductCard() {

const products = [
    
{name: 'Rolex', price: 15000 },
{name: 'Ford F 150', price: 30000 },
{name: 'Tesla', price: 75000 },
{name: 'Monster Truck', price: 150000 },
{name: 'Ferarri', price: 250000 },
{name: 'Private Jet', price: 20000000 },
{name: 'Hellicopter', price: 31000000 },
{name: 'Yachts', price: 7500000 },
{name: 'Mansion', price: 45000000 },
{name: 'Acre Of Land', price: 10000 },
{name: 'Apartment', price: 200000 },
{name: 'Cruise Ship', price: 930000000 },
];

  return (
    <div>
        {products.map((product, idx) => (
            <div key={idx}>
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
                <div>
                    <Button>Sell</Button>
                    <Button>Sell</Button>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default ProductCard