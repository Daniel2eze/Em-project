import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import commentImg from '../src/assets/commenting-img.svg';
import { comments } from '../database/db';
function Comment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={commentImg} alt='' role='button' onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* header and text area */}
          <h4>Add Comment</h4>
          <textarea
            name=''
            className='ps-2 w-100 rounded'
            placeholder='Type here...'
            cols='30'
            rows='5'
          ></textarea>
          <div className='text-end'>
            <button className=' btn btn-sm btn-primary  rounded-pill px-5'>
              post
            </button>
          </div>

          {/* comments database */}
          <h5>Previous comments</h5>
          <div className=''>
            {comments.map((person) => {
              const { id, name, time, comment, profileImg, follow } = person;
              return (
                <div key={id} className=' border mb-2 rounded-2 p-2'>
                  <div className='d-flex align-items-center justify-content-between'>
                    {/* pics and name */}
                    <div className='d-flex align-items-center gap-2'>
                      <img src={profileImg} alt='' />
                      <span className='d-flex flex-column justify-content-center  '>
                        <h5 className='pt-3'>{name}</h5>
                        <p>{time}</p>
                      </span>
                    </div>
                     
                    {/* btn follow */}
                    <button className='btn btn-white btn-sm rounded-pill border px-4'>
                      {follow}
                    </button>
                  </div>

                  {/* comment */}
                  <p>{comment}</p>
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Comment;