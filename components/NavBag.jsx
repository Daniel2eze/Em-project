import notImg from '../src/assets/notification.svg';
import logOutImg from '../src/assets/logout-img.svg';
import { Link, useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';
import { useState } from 'react';


const NavBag = () => {
  const [modalShow, setModalShow] = useState(false);

  const [showModal, setShowModal] =useState(false);
  const handleImageClick =()=>{
      setShowModal(true);
  };
  const handleCloseModal = ()=>{
      setShowModal(false);
  };

  const navigate =useNavigate()
  const logOut = ()=>{
    localStorage.removeItem("clientToken")
    Navigate("/signin")
  }
  return (
    <>
      <section className=' rounded-2 bg-white border p-2'>
        {/* Edit */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <EditProfile />
            <span className='fw-lighter'>Edit Profile</span>
          </div>
          <hr />
        </div>

        {/* Notification */}
        <div className='mb-4'>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start'>
            <Link to='#'>
              <img src={notImg} alt='' />
            </Link>
            <span className='fw-lighter'>Notifications</span>
          </div>
          <hr />
        </div>

        {/* Logout */}
        <div>
          <div className='d-flex gap-2 align-items-center first-div justify-content-start '>
            <Link to='/signIn'>
              <img src={logOutImg} alt='' />
            </Link>
            <span role="button"className='fw-lighter'onClick={logOut}>Log Out</span>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default NavBag;