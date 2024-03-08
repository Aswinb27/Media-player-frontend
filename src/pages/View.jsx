import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../service/allapi'




function View(serverRes) {
  const[allVideos,setallVideos]=useState([])

  const[deleteStatus,setdeletestatus]=useState(false)

  const getallVideos = async () => {
    let response = await getVideo()

    // console.log(response.data);

    setallVideos(response.data)

  }

  console.log(allVideos);

  useEffect(() => {

    getallVideos()
  
   
  }, [serverRes,deleteStatus])

  const handledeleteStatus=(res)=>{
    setdeletestatus(res)
   }
  

  return (
    <div className='border p-3 rounded'>
      <Row>
       
      
      {
        allVideos.map(video=>(
          <Col className='ps-3 mb-3' sm={12} md={6}>
          <Videocard card={video} handledeleteStatus={handledeleteStatus} />
        </Col>

        ))
      }
      </Row>



    </div>
  )
}

export default View