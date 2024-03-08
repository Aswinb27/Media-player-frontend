import React from 'react'
import { PlusCircle } from 'react-feather'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({ handleRes }) {
  const [uploadData, setuploadData] = useState({
    id: "", caption: "", thumbnail: "", url: ""
  })


  const setInput = (e) => {
    const { name, value } = e.target

    // console.log(e.target.value);
    setuploadData({ ...uploadData, [name]: value })
  }
  console.log(uploadData);

  // original url (copied url) : https://www.youtube.com/watch?v=cgCvHycWkH8

  // src (stored url) : src="https://www.youtube.com/embed/cgCvHycWkH8"

  // <iframe width="1013" height="570" src="https://www.youtube.com/embed/cgCvHycWkH8" title="New Royal Enfield Himalayan First Look Review In Tamil | Exhaust Sound | Walkaround" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  const extractUrl = (e) => {

    let youtubeUrl = e.target.value

    if (youtubeUrl.includes("v=")) {

      let index = youtubeUrl.indexOf("v=")
      console.log(index);

      let videoUrl = youtubeUrl.substring(index + 2, index + 13)
      console.log(videoUrl);

      let videoData = uploadData

      videoData.url = `https://www.youtube.com/embed/${videoUrl}`
      setuploadData(videoData)
    }
    console.log(uploadData);
  }

  // define handle add function

  const handleAdd = async () => {

    // destructure upload data state  

    const { id, caption, thumbnail, url } = uploadData

    // condition check only after destructure object

    if (!id || !caption || !thumbnail || !url) {
      toast.warn('please fill the  form completly', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else {

      const response = await addVideo(uploadData)

      //  console.log(response);

      if (response.status >= 200 && response.status < 300) {



        // console.log(response);

        handleRes(response.data)
        toast.success("new video uploaded successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        setShow(false)
      } else {
        toast("provide a unique id!!")
      }

    }


  }



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className='mr-5' onClick={handleShow}>
        <PlusCircle color='#fad203' size={70} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading Video Id">
              <Form.Control type="text" placeholder="video id" name='id' onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading Video Caption">
              <Form.Control type="text" placeholder="video caption" name='caption' onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading Video Cover image url">
              <Form.Control type="text" placeholder="video cover image url" name='thumbnail' onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingId" label="Uploading Video Link">
              <Form.Control type="text" placeholder="video Link" name='url' onChange={extractUrl} />
            </FloatingLabel>


          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default Add