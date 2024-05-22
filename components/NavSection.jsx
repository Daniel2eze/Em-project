import homeImg from '../src/assets/home-img.svg';
import communityImg from '../src/assets/community-img.svg';
import { Link } from 'react-router-dom';
import Example from './ProfilePopUp';
const NavSection = () => {
  return (
    <>
      <div className='d-flex justify-content-center mt-4 d-md-none d-lg-none'>
        <section className='d-flex gap-5 px-5 py-2  justify-content-between w-100 nav-section bg-white align-items-center rounded-top'>
          <div className='d-flex flex-column align-items-center'>
            <Link to='/'>
              <img src={homeImg} alt='' />
            </Link>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <img src={communityImg} alt='' />
          </div>
          <div className='d-flex flex-column align-items-center '>
            <Example/>
          </div> 
        </section>
      </div>
    </>
  );
};

export default NavSection;