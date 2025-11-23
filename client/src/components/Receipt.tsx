import { useProductStore } from "@/stores/ProductStore"
import { Button } from "./ui/button.tsx"
import { useNavigate } from "react-router-dom"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from './ui/card.tsx'


function Receipt() {
    const navigate = useNavigate();
    const products = useProductStore(state => state.products);
    const purchasedProducts = products.filter((product) => product.quantity > 0);

    const total = purchasedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    if (purchasedProducts.length === 0) {
  return (
    <div className="flex items-center justify-center h-screen">
        <Card className="max-w-md w-full">
      <CardHeader>
        <CardTitle>No Purchases Yet</CardTitle>
        <CardDescription>
          You haven't bought any products yet. Start shopping to see them here!
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600">
          Once you purchase a product, it will appear in your receipt.
        </p>
      </CardContent>

      <CardFooter>
        <Button onClick={() => navigate("/")}>
          Go Shopping
        </Button>
      </CardFooter>
    </Card>
    </div>
  );
}


  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg ">
      <h1 className="text-3xl font-bold mb-6 text-center">Receipt</h1>
      
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th>Image</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {purchasedProducts.map((product) => (
            <tr key={product.name} className="border-b">
              <td className="py-2 px-4"><img src={product.img} alt={product.name} className="w-16 h-16 object-cover"/></td>
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">{product.quantity}</td>
              <td className="py-2 px-4">
                ${product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-between text-lg font-bold">
        <span>Total Spent:</span>
        <span>${total}</span>
      </div>
    </div>
  );
}

export default Receipt