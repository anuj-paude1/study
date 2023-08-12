"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home() {

  const [pass, setPass] = useState("");
  const [data, SetData] = useState([]);
  const [show,setShow] = useState(false);

  useEffect(()=>{

    if(pass=="mujiii"){

      setTimeout(()=>{
      
        setShow(true);
        // console.log("KIRTAN")
        setPass("")

      },3000)

      
    }
    

  },[pass])

  return (
    <div className=" h-screen flex items-center  w-screen">
      {/* <Image alt="Image"> */}

      <div className='flex flex-col justify-center w-full h-full' >

      
      <div className='flex flex-col items-center'>
        {show ?

          <div className='flex flex-col items-center'>

            <div>
              <label>Enter Data You Want To Add : </label>
              <textarea className='bg-gray-300 text-[#006a4e] rounded-xl w-96 h-36' />
            </div>


            <button  className='rounded bg-[#006a4e] text-gray-100 w-20 h-12 cursor-pointer hover:bg-[#2a8000]' onClick={() => alert("ADDED TO NOWWHERE")}>Add</button>

            {
              data && data.map((e) => (

                <div key={e.id}> {e.url} </div>

              ))
            }

        <button className='hover:bg-red-600 w-20  rounded-md h-10' onClick={()=>setShow(false)} >back</button>
          </div>
          :
          <div  className={` ${pass=="mujiii" && "opacity-0 ease-in-out duration-[3000ms]"} flex flex-col items-center `}>

            <div>ENTER PASSWORD</div>
            <input type='name' disabled={pass == "mujiii" ? true : false} className= {` bg-transparent border-x-4 border-r-gray-50 text-white rounded-xl w-60 h-10 `} onChange={(e) => setPass(e.target.value)} ></input>
            

          </div>
          }


      </div>
    
      </div>


    </div>


  )
}
