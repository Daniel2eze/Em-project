import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import profileImg from '../assets/profile-img.svg';
import locationImg from '../src/assets/location-img.svg';
import realtorImg from '../src/assets/realtor-logo.svg';
import linkedinImg from '../src/assets/linkedin-logo.svg';
import twitterImg from '../src/assets/x-img.svg';
import YujiImg from '../src/assets/yujiimg.svg';
import followersImg from '../src/assets/followers-img.svg';
import likesImg from '../src/assets/likes-logo.svg';
import followingImg from '../src/assets/following-img.svg';
function FriendProfileSection() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='off-div'>
        <img
          src={YujiImg}
          alt=''
          className='logo-img img-fluid off-img d-lg-none'
          onClick={handleShow}
        />
      </div>
      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      <Offcanvas show={show} onHide={handleClose} responsive='lg'>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section className='col-lg-4 d-lg-none profile-section'>
            {/* profile div */}
            <div className='d-flex align-items-center gap-2'>
              <img src={YujiImg} alt='' className='profile-img' />
              <div className='d-flex flex-column '>
                <span className=''>Yuji Itadori</span>
                <span className=''>0 friends</span>
              </div>
            </div>
            <hr />

            {/* bio div */}
            <div>
              <h4>Bio</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Mi nec turpis vulputate
                sed. Tellus quisque pharetra facilisi nisl nisi consectetur. Sed
                in nisi convallis vitae tortor rhoncus.
              </p>
            </div>
            <hr />

            {/* activities */}
            <div>
              <h4>Activities</h4>
              <div className='d-flex align-items-center gap-2'>
                <img src={followersImg} alt='' /> <span>Followers</span>
              </div>
              <div className='d-flex align-items-center mt-2 gap-2'>
                <img src={followingImg} alt='' /> <span>Following</span>
              </div>
              <div className='d-flex align-items-center mt-2 gap-2'>
                <img src={likesImg} alt='' /> <span>Likes</span>
              </div>
            </div>
            <hr />

            {/* information */}
            <div>
              <h4>Info</h4>
              <div className='d-flex align-items-center gap-2'>
                <img src={locationImg} alt='' /> <span>Location</span>
              </div>
              <div className='d-flex align-items-center mt-2 gap-2'>
                <img src={realtorImg} alt='' /> <span>Realtor</span>
              </div>
            </div>
            <hr />
            {/* socials */}
            <div>
              <h4>Socials</h4>
              <div className='d-flex align-items-center gap-2'>
                <a href='http://' target='_blank' rel=''>
                  <img src={twitterImg} alt='' />
                </a>{' '}
                <span>Twitter</span>
              </div>
              <div className='d-flex align-items-center mt-2 gap-2'>
                <a href='http://' target='_blank' rel=''>
                  <img src={linkedinImg} alt='' />
                </a>{' '}
                <span>Linkedin</span>
              </div>
            </div>
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FriendProfileSection;