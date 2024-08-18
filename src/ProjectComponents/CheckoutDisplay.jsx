import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'


const CheckoutDisplay = () => {
    const location = useLocation();
    const { cartItems, totalBill } = location.state || { cartItems: [], totalBill: 0 };
    const [firstName,setFirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [address,setAddress]=useState('')
    const [email,setEmail]=useState('')
    const [telNo,setTelNo]=useState('')
    const [region,setRegion]=useState('')
    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
    }
    const handlelasttName=(e)=>{
        setlastName(e.target.value)
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleTelno=(e)=>{
        setTelNo(e.target.value)
    }
    const handleRegion=(e)=>{
        setRegion(e.target.value)
    }
  return (
    <div>
      <p className='text-black font-bold text-center ArchivoBlack text-3xl mb-4 bg-gray-200 border-b-2 py-4 border-black'>CHECKOUT</p>
      <form>
        <div className='flex flex-col md:mx-40 md:mr-[600px] border border-gray-500 mx-4 '>
            <h2 className='bg-black text-white font-bold  py-4 pl-4 text-lg'>1.Delivery Options</h2>
            <p className='text-gray-500 px-4 mt-4'>Shipping Details</p>
            <div className='flex flex-row space-x-2'>
                <label className='text-gray-500 px-4 '>
                    First Name:
                </label>
                <input type='text' value={firstName} onChange={handleFirstName} className='border-2'/>
                <label className='text-gray-500 px-4'>
                    Last Name:
                </label>
                <input type='text' value={lastName} onChange={handlelasttName} className='border-2'/>

            </div>
            <div className='flex flex-row px-4'>
            <label className='text-gray-500'>Shipping Address:</label>
            <input type='text' value={address} onChange={handleAddress} />

            </div>
            <div className='flex flex-row px-4'>
            <label className='text-gray-500'>Email Address:</label>
            <input type='text' value={email} onChange={handleEmail}/>
            </div>
            <div className='flex flex-row px-4'>
            <label className='text-gray-500'>(Tel/Fax) No:</label>
            <input type='text' value={telNo} onChange={handleTelno}/>
            </div>

        </div>
        <div className='flex flex-col border border-gray-500 md:mx-40 md:mr-[600px] mt-10 mx-4 space-y-2'>
        <h2 className='bg-black text-white font-bold  py-4 pl-4 text-lg'>2.Payment</h2>
        <p className='text-gray-500 mt-4 px-4 '>Billing Country/Region</p>
        <input type='text' value={region} onChange={handleRegion} className='focus:outline-none border-2 ml-4 mr-80 '/>
        <div className='flex flex-row pl-4 space-x-2'>
        <input type='checkbox' />
        <p className='text-black'>Do you have a gift card, product voucher, or promo code?</p>
        </div>
        <p className='px-6 border-t font-bold text-[18px] mt-2 pt-2'>Select Payment Method</p>
        <div className='flex flex-row px-6 space-x-24'>
       <div className='flex flex-row space-x-2'>
        <input type='radio' />
        <img src='./public/creditcard.png' className='w-8 h-10'/>
        <label className='mt-2'>Credit/Debit Card</label>
       </div>
        <div className='flex flex-row space-x-2'>
        <input type='radio' />
        <img src='./public/paypal.jpeg' className='w-16'/>
        
       </div>
        </div>
        </div>
        <div className='flex flex-col border border-gray-500 md:mx-40 md:mr-[600px] mt-10 mx-4 space-y-2'>
            <h2 className='bg-black text-white font-bold  py-4 pl-4 text-lg'>3.Order Review</h2>
            <p className='px-4'>Items in Cart:</p>
                    <ul className='px-8 max-h-64 overflow-y-auto'>
                        {cartItems.map((item, index) => (
                            <li key={index} className='flex items-center mb-4'>
                                <img src={item.image} alt={item.name} className='w-24 h-16 object-cover mr-4' />
                                <div className='flex flex-col'>
                                    <span className='font-bold'>{item.name}</span>
                                    <span>{item.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className='px-4 font-bold py-2'>Total Bill: ${totalBill}</p>
           

        </div>
      </form>
    </div>
  )
}

export default CheckoutDisplay
