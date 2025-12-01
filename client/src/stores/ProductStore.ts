import {create} from 'zustand';
import rolex from '../assets/rolex.jpg'
import ford from '../assets/ford.jpg'
import tesla from '../assets/tesla.jpg'
import monster from '../assets/monster.jpg'
import ferrari from '../assets/ferrari.jpg'
import jet from '../assets/jet.jpg'
import helicopter from '../assets/helicopter.jpg'
import yacht from '../assets/yacht.jpg'
import mansion from '../assets/mansion.jpg'
import apartment from '../assets/apartment.jpg'
import cruise from '../assets/cruise.jpg'
import land from '../assets/land.jpg'
import iphone from '../assets/iphone.jpg'
import laptop from '../assets/laptops.jpg'



export interface Product {
    name: string;
    price: number;
    img: string;
    quantity: number;
}


interface ProductState {
    products: Product[];
    netWorth: number;
    buy: (name: string) => void;
    sell: (name: string) => void;
}
export const useProductStore = create<ProductState>((set, get) => ({
    netWorth: 456000000000,
    products: [
    { name: 'Rolex', price: 15000, img: rolex, quantity: 0 },
    { name: 'Ford F 150', price: 30000, img: ford, quantity: 0 },
    { name: 'Tesla', price: 75000, img: tesla, quantity: 0 },
    { name: 'Monster Truck', price: 150000, img: monster, quantity: 0 },
    { name: 'Ferarri', price: 250000, img: ferrari, quantity: 0 },
    { name: 'Private Jet', price: 20000000, img: jet, quantity: 0 },
    { name: 'Hellicopter', price: 31000000, img: helicopter, quantity: 0 },
    { name: 'Yachts', price: 7500000, img: yacht, quantity: 0 },
    { name: 'Mansion', price: 45000000, img: mansion, quantity: 0 },
    { name: 'Acre Of Land', price: 10000, img: land, quantity: 0 },
    { name: 'Apartment', price: 200000, img: apartment, quantity: 0 },
    { name: 'Donation To Charity', price: 1000000, img: apartment, quantity: 0 },
    { name: 'Mac book Laptops', price: 2000, img: laptop, quantity: 0 },
    { name: 'Iphone 17', price: 3000, img: iphone, quantity: 0 },
  ],
    buy: (name) => {
    const { products, netWorth } = get();
    const product = products.find(p => p.name === name);
    if (!product || netWorth < product.price) return;

    set({
      netWorth: netWorth - product.price,
      products: products.map(product =>
        product.name === name ? { ...product, quantity: product.quantity + 1 } : product
      )
    });
  },

  sell: (name) => {
    const { products, netWorth } = get();
    const product = products.find(p => p.name === name);
    if (!product || product.quantity <= 0) return;

    set({
      netWorth: netWorth + product.price,
      products: products.map(product =>
        product.name === name ? { ...product, quantity: product.quantity - 1 } : product
      )
    });
  },
  
  reset: () => {
    set((state) => ({
        products: state.products.map(product => ({...product, quantity: 0})),
    }))
  }

}))