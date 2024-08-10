import React,{useState,useEffect} from 'react'
import productsData from '../productsData.json';


const MenProducts = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      
        const filtered = productsData.filter(product => product.gender === 'Men');
        setProducts(filtered); 
    }, []); 
  
    return (
        <div className='grid grid-cols-3 gap-8 mx-32 mt-2'>
        {products.map(product => (
          <div key={product.id} className="product-card border p-4 rounded-xl flex flex-col justify-between items-stretch">
            <img src={product.image} alt={product.name} className='mb-4'/>
            <h3 className='text-lg font-semibold'>{product.name}</h3>
            <div className='flex flex-row justify-between'>
            <p className='font-bold'>{product.price}</p>
            <button className='rounded-xl text-white bg-black p-2'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      
    );
  };
export default MenProducts