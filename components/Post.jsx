import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import galleryImg from '../src/assets/gallary-img.svg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import roadImg from '../src/assets/road-img.svg';
import cityImg from '../src/assets/city-img.svg';
import teaImg from '../src/assets/tea-img.svg';
function Post() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex align-items-center'>
        <img src={galleryImg} alt='' onClick={handleShow} role='button' />{' '}
        <span>Image</span>
      </div>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          {/* write post input */}

          <FloatingLabel
            controlId='floatingTextarea'
            label='Write post'
            className='mb-3'
          >
            <Form.Control
              style={{ height: '15rem' }}
              as='textarea'
              placeholder='Leave a comment here'
            />
          </FloatingLabel>

          {/* images */}
          <section className='d-flex  justify-content-between gap-3'>
            <div>
              <img src={roadImg} alt='' className='img-fluid' />
            </div>

            <div>
              <img src={cityImg} alt='' className='img-fluid' />
            </div>

            <div>
              <img src={teaImg} alt='' className='img-fluid' />
            </div>
          </section>
          <div className='text-end'>
          <button type="button" className="btn mt-3  px-4 rounded-pill btn-primary btn-sm">post</button>

          </div>

        
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Post;