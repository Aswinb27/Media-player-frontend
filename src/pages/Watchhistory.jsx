import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { gethistory } from '../service/allapi'
import { Link } from 'react-router-dom'

function Watchhistory() {

    const[history,sethistory]=useState([])

    const getwatchHistory=async()=>{
      let {data}= await gethistory()
 
     //  console.log(data);
      sethistory(data)
    }
    console.log(history);
 
    useEffect(() => {
     getwatchHistory()
    }, [])
    
 
   return (
     <>
     <div className='d-flex justify-content-center align-items-center'>
      <h1 className='me-5'>Watch history</h1>
      <Link to={'/home'} style={{textDecoration:'none',fontsize:'20px',color:'blue',fontweight:"bolder"}}>
        <span> <arrowleft/> </span>Bank</Link>

     </div>
     
     <table className='table-shadow border rounded m-3'>
       <thead>
         <tr>
           <th>No</th>
           <th>Name</th>
           <th>Url</th>
           <th>Date</th>
         </tr>
       </thead>
       <tbody>
 
           {
             history?.map((item,index)=>(
                
            <tr>
             <td>{index+1}</td>
             <td>{item.cardName}</td>
             <td>{item.url}</td>
             <td>{item.date}</td>
            </tr>
 
             ))
           }
           
        
       </tbody>
     </table>
     </>
  )
}

export default Watchhistory