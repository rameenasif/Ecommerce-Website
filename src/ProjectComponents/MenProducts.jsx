import React,{useState,useEffect,useContext} from 'react'
import productsData from '../productsData.json';
import { CartContext } from '../Contexts/CartContext'
import {useNavigate} from 'react-router-dom'



const MenProducts = () => {
    const [products, setProducts] = useState([])
    const { addToCart } = useContext(CartContext)
    const navigate=useNavigate()
  
    useEffect(() => {
      
        const filtered = productsData.filter(product => product.gender === 'Men');
        setProducts(filtered); 
    }, [])
    const handleProductView=(product)=>
      {
        navigate('/view',{state:{product}})
  
      }
  
    return (
        <div className='md:grid md:grid-cols-3 flex flex-col gap-8  md:mx-32 mx-4 mt-2'>
        {products.map(product => (
          <div key={product.id} className="product-card border p-4 rounded-xl flex flex-col justify-between items-stretch">
            <img src={product.image} alt={product.name} className='mb-4'/>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <div className='flex flex-row justify-between'>
            <p className='font-bold'>{product.price}</p>
            <button className=' border border-transparent rounded-xl text-white bg-black md:p-2 p-1 hover:bg-white hover:text-black hover:border-black' onClick={() => addToCart(product)}>Add to cart</button>
            </div>
            <button className='text-black mt-0  mr-80 background-transparent  hover:underline underline-offset-4 hover:text-black hover:decoration-black' onClick={()=>handleProductView(product)}>View</button>
          </div>
        ))}
        <div className='col-span-3 text-center'>
          <p className='text-black font-bold text-xl'>End Of Products</p>
          <p className='text-black font-bold text-5xl'>...</p>
        </div>
      </div>
      
      
    );
  };
export default MenProducts