import React from 'react'

const ContactUs = () => {

    const handleSubmit=()=>{
    alert('Your response have been submitted. Thank You!')
    }
  return (
    <div className='flex flex-col md:mx-20 mx-1'>
        <h1 className='text-black bg-gray-200 border-b-2 border-black text-center text-3xl py-6 ArchivoBlack font-bold px-2'>SUBMIT A QUESTION TO OUR SUPPORT TEAM</h1>
        <form>
            <h2 className='ArchivoBlack text-xl mt-2'>WHAT CAN WE HELP YOU WITH?</h2>
            <p className='text-gray-500 text-[17px]'>For questions about products found on Nike.com or related to your Nike.com order, please<br></br> complete the form below.You can expect to hear
            back from us in 24 hours.Please do not include any sensitive<br></br>or confidential information in this form. If your inquiry requires you to do so, please call us.
            </p>
            <div className='flex flex-col mt-2'>
                <label className='text-gray-500 font-semibold'>Email Address <span className='text-red-800'>*</span></label>
                <input type="email" className='md:mr-[800px] mr-28 border border-gray-400 rounded-md px-2'/>
                <label className='text-gray-500 font-semibold'>Re-enter Email Address <span className='text-red-800'>*</span></label>
                <input type="email" className='md:mr-[800px] mr-28 border border-gray-400 rounded-md px-2'/>
                <label className='text-gray-500 font-semibold'>Subject <span className='text-red-800'>*</span></label>
                <input type="text" className='md:mr-[800px] mr-28 border border-gray-400 rounded-md px-2' />
                <label className='text-gray-500 font-semibold'>Question <span className='text-red-800'>*</span></label>
                <input type="text" className='md:mr-[800px] mr-28 border border-gray-400 rounded-md py-6 px-2'/>
                <button className='bg-black text-white font-semibold md:mx-[600px] mx-28 mt-6 rounded-lg py-2'onClick={()=>handleSubmit()}>Submit</button>

            </div>
        </form>
      
    </div>
  )
}

export default ContactUs
