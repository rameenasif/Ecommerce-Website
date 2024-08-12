import React,{useState,useEffect, useContext} from 'react'
import productsData from '../productsData.json';
import { CartContext } from '../Contexts/CartContext.jsx';


const ProductCards = () => {
    const [products, setProducts] = useState([]);
    const{addToCart}=useContext(CartContext)
  
    useEffect(() => {
      setProducts(productsData);
    }, []);
  
    return (
        <div className='grid grid-cols-3 gap-8 mx-32 mt-2'>
        {products.map(product => (
          <div key={product.id} className="product-card border p-4 rounded-xl flex flex-col justify-between items-stretch">
            <img src={product.image} alt={product.name} className='mb-4'/>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <div className='flex flex-row justify-between'>
            <p className='font-bold'>{product.price}</p>
            <button className=' border border-transparent rounded-xl text-white bg-black p-2 hover:bg-white hover:text-black hover:border-black' onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
      
    );
  };
export default ProductCards



