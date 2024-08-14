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
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 md:mx-32 mx-4 mt-2'>
        {products.map(product => (
          <div key={product.id} className="product-card border p-4 rounded-xl flex flex-col justify-between items-stretch">
            <img src={product.image} alt={product.name} className='mb-4'/>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <div className='flex flex-row justify-between'>
            <p className='font-bold'>{product.price}</p>
            
          
            <button className=' border border-transparent rounded-xl text-white bg-black p-2 hover:bg-white hover:text-black hover:border-black' onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
            <button className='text-black mt-0  mr-80 background-transparent  hover:underline underline-offset-4 hover:text-black hover:decoration-black'>View</button>
          </div>
        ))}
      </div>
      
    );
  };
export default ProductCards



