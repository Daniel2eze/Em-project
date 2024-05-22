import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profileImg from '../src/assets/profile-img.svg';
import NavBag from './NavBag';
function ProfilePopUp({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={profileImg} onClick={handleShow} alt='' />

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <NavBag/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <ProfilePopUp key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}



export default Example;