import React,{useState,useEffect,useContext} from 'react'
import productsData from '../productsData.json'
import { CartContext } from '../Contexts/CartContext'


const KidsProducts = () => {
    const [products, setProducts] = useState([])
    const{addToCart}=useContext(CartContext)
  
    useEffect(() => {
      
        const filtered = productsData.filter(product => product.gender === 'Kids')
        setProducts(filtered); 
    }, []); 
  
    return (
        <div className='grid md:grid-cols-3 grids-cols-2 gap-8 md:mx-32 mt-2'>
        {products.map(product => (
          <div key={product.id} className="product-card border p-4 rounded-xl flex flex-col justify-between items-stretch">
            <img src={product.image} alt={product.name} className='mb-4'/>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <div className='flex flex-row justify-between'>
            <p className='font-bold'>{product.price}</p>
            <button className=' border border-transparent rounded-xl text-white bg-black p-2 hover:bg-white hover:text-black hover:border-black' onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      
    );
  };
export default KidsProducts