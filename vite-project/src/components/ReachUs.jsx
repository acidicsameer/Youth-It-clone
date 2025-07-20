import React from 'react'

const ReachUs = () => {
  return (
    <>
       
<div className='flex flex-col gap-2'>
     
    <div className='text-center text-blue-700 text-2xl font-bold '>
        Reach out for inquiries, support, or feedback. We’re  <br />here to help!
    </div>
    <div className='text-center text-blue-700 text-2xl font-bold '>
        Fill out the form, and we’ll get back to you promptly.
    </div>
    </div>
   
    <div className='  bg-[#F6F9FE] mt-15 border-4 border-black mr-50 ml-10'>

         <div className='text-center text-3xl font-extrabold  text-blue-800 p-7 '> Reach & Get In Touch With Us!

</div>


 <div className='flex  w-full  bg-[#F6F9FE]'>

 

    <div className='   w-1/2 flex flex-col '> 
<div className='flex  m-2 p-2  flex-wrap '>
        <input type="text"  className=' w-[50%] border-b-2 p-2.5 m-3 text-black  border-black' placeholder='First Name'/>
        <input type="text"   className=' w-[40%] border-b-2 p-2.5 m-3 text-black  border-black' placeholder='Last Name'/>
        <input type="phone"   className= ' w-1/2 border-b-2 p-2.5 m-3 text-black border-black' placeholder='Phone' />
        <input type="text"  className=' w-[40%] border-b-2 p-2.5 m-3 text-black border-black' placeholder='Address' />
        <input type="email" className=' w-full border-b-2 p-2.5 m-3 text-black border-black' placeholder='Email Address'/>
</div>
  
    <div className=' m-1 p-2 '>
         <div className='font-bold'>How We Can Help You?</div> 
    
    <div>
        <div className='border-b-2 border-black p-2 mb-8'>
        <input type="text" className=' w-full opacity-50' value='Describe Your Problem'/>
    </div>
     <button type='button' className='bg-blue-900  mb-3 text-white font-bold text-2xl rounded-4xl h-[60px] p-3'> Send Message</button>
</div>

</div>
</div>
   
    
   
    
    <div className=' w-1/2 p-5 flex flex-col gap-y-3'>
        
        <div className='font-bold text-xl  '>Need Specific Help?</div>

    <div className='text-xl' >If you need any assistance, we’re available 24/7. Feel free to call us directly using the contact details above or visit our office anytime.</div>
    
    <div>
        <iframe className='h-[200px] w-full rounded-2xl mt-2.5'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.282228661456!2d87.278699!3d26.662962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef41a2da4cbcf5%3A0x711ee6a5b3d1ccee!2sYouth%20IT%2C%20Pragati%20Marga%2C%20Itahari%2056705!5e0!3m2!1sen!2snp!4v1721460292276!5m2!1sen!2snp"

    ></iframe>
    </div>
    </div>
    </div> 
    </div></>
  )
}

export default ReachUs