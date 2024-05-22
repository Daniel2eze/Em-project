import NavSection from '../../components/NavSection';
import NavBar from '../layout/NavBar'
import profileImg from '../assets/profile-img.svg';
import locationImg from '../assets/location-img.svg';
import realtorImg from '../assets/realtor-logo.svg';
import linkedinImg from '../assets/linkedin-logo.svg';
import twitterImg from '../assets/x-img.svg';
import '../Styles/Home.css'
import Post from '../../components/Post';
import {people} from '../../database/db'
import likeImg from '../assets/like-img.svg';
import shareImg from '../assets/shareimg.svg';
import Comment from '../../components/Comment'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const token = localStorage.getItem('clientToken');
  const [bioProfile, setBioProfile] = useState([]);
  const getBioProfile = async () => {
    try {
      const request = await fetch('http://localhost:5785/api/vi/users', {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      console.log(response.user);
      setBioProfile(response.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBioProfile();
  }, []);

  return (
    <>
      {/* nav */}
      <NavBar />

      {/* main content */}
      <div className='home-wrapper'>
        <div className='container'>
          <main className=' row home-main gap-2 pt-3'>
            {/* profile col */}
            <section className='col-lg-4 d-none d-lg-block p-2 rounded-2  border profile-section '>
              {/* profile div */}
              <div className='sticky-div'>
                <div className='d-flex align-items-center gap-2'>
                  <img src={bioProfile?.profilePhoto} alt='' className='profile-img' />
                  <div className='d-flex flex-column '>
                    <span className=''>{bioProfile?.userName}</span>
                    <span className=''>{bioProfile?.followers?.length}</span>
                  </div>
                </div>
                <hr />

                {/* bio div */}
                <div>
                  <h4>Bio</h4>
                  <p>{bioProfile?.bio}</p>
                </div>
                <hr />

                {/* information */}
                <div>
                  <h4>Info</h4>
                  <div className='d-flex align-items-center gap-2'>
                    <img src={locationImg} alt='' />{' '}
                    <span>{bioProfile?.location}</span>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-2'>
                    <img src={realtorImg} alt='' />{' '}
                    <span>{bioProfile?.occupation}</span>
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
                    <span>{bioProfile?.x}</span>
                  </div>
                  <div className='d-flex align-items-center mt-2 gap-2'>
                    <a href='http://' target='_blank' rel=''>
                      <img src={linkedinImg} alt='' />
                    </a>{' '}
                    <span>{bioProfile?.Linkedin}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* news-field col */}

            <section className='col-lg'>
              {/* top div */}
              <div className='p-2 top-news-field rounded-2 mb-2 border'>
                {/*  */}
                <div className='d-flex gap-2 align-items-center'>
                  <img src={profileImg} alt='' />
                  <input
                    type='text'
                    className='rounded-pill ps-2 post-input w-100'
                    placeholder='What do you want to share?'
                  />
                </div>

                {/*  */}
                <div className=' d-flex align-items-center justify-content-between mt-2'>
                  <Post />
                  <button className='btn btn-sm btn-primary text-light px-4 rounded-pill'>
                    {' '}
                    post
                  </button>
                </div>
              </div>

              <div className='mb-5'>
                {people.map((person) => {
                  const { id, name, time, post, profileImg, postImg, follow } =
                    person;
                  return (
                    <div key={id} className='p-2 mb-3 rounded-2 scroll-page'>
                      {/* top div */}
                      <div className='d-flex justify-content-between align-items-center '>
                        {/* img and time */}
                        <div className='d-flex gap-2 align-items-center'>
                          <Link to='/FriendProfile'>
                            <img src={profileImg} alt='' className='' />
                          </Link>
                          <span className='d-flex flex-column justify-content-center '>
                            <Link
                              to='/friendProfile'
                              className='text-decoration-none'
                            >
                              <h5 className='pt-3 text-black'>{name}</h5>
                            </Link>

                            <p>{time}</p>
                          </span>
                        </div>

                        {/* btn-div */}
                        <div>
                          <button className='btn btn-white btn-sm rounded-pill follow-btn border px-4'>
                            {follow}
                          </button>
                        </div>
                      </div>

                      {/* post */}
                      <p>{post}</p>

                      {/* post-img */}
                      <img src={postImg} className='w-100' alt='' />

                      {/* reactions */}
                      <main className='d-flex pt-2 justify-content-between align-items-center'>
                        {/* like and comment */}

                        <div className='d-flex gap-2'>
                          <img src={likeImg} alt='' role='button' />
                          <Comment />
                        </div>

                        {/* share */}
                        <div>
                          <img src={shareImg} alt='' role='button' />
                        </div>
                      </main>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </div>
      {/* fixed section */}
      <NavSection />
    </>
  );
};

export default Home;