import { useProductStore } from "@/stores/ProductStore";
import { MdError } from "react-icons/md";
import {toast} from 'sonner'
import { Button } from "./ui/button"



function ProductCard() {
    const products = useProductStore(state => state.products);
    const netWorth = useProductStore(state => state.netWorth);
    const buy = useProductStore(state => state.buy);
    const sell = useProductStore(state=> state.sell);

    const handleBuy = (productName: string) => {
    const product = products.find(p => p.name === productName);
    if (!product) return;

    if (netWorth >= product.price) {
      buy(productName);
      toast.success(`Bought ${product.name}!`);
    } else {
      toast(
        <div className="flex items-center gap-2 text-red-600">
          <MdError /> 
          <span>Insufficient funds!</span>
        </div>
      );
    }
  };

    const handleSell = (productName: string) => {
    const product = products.find(p => p.name === productName);
    if (!product || product.quantity <= 0) {
      toast(
        <div className="flex items-center gap-2 text-red-600">
          <MdError />
          <span>No items to sell!</span>
        </div>
      );
      return;
    }
    sell(productName);
    toast.success(`Sold ${product.name}!`);
  };
  

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
                    <Button className={product.quantity <= 0 ? 'w-[6rem] bg-gray-400 cursor-not-allowed' : 'w-[6rem] bg-red-600 hover:bg-red-700'} onClick={() => handleSell(product.name)}>Sell</Button>
                    <span className="font-bold text-md">{product.quantity}</span>
                    <Button className={netWorth < product.price ? 'w-[6rem] bg-gray-400 cursor-not-allowed' : 'w-[6rem] bg-green-600 hover:bg-green-700'} onClick={() => handleBuy(product.name)}>Buy</Button>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default ProductCard