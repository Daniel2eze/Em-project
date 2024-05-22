import { useEffect, useCallback } from 'react';
import homeImg from '../assets/home-img.svg';
import communityImg from '../assets/community-img.svg';
import profileImg from '../assets/profile-img.svg';
import searchImg from '../assets/search-normal.svg';
import NavBag from '../../components/NavBag';
import logoImg from '../assets/logo-img.svg';
import '../Styles/Nav.css';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';
import ProfileSection from '../../components/ProfileSection';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
const Navbar = () => {
  const [bagShow, SetBagShow] = useState(false);
  const token = localStorage.getItem("clientToken");
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(['']);
  function handleDrop() {
    !bagShow ? SetBagShow(true) : SetBagShow(false);

  }
  const performSearch = useCallback(
    async (term) => {
      if (term) {
        try {
          const request = await fetch(
            `http://localhost:5785/api/v1/users/search?searchTerm=${term}`,
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const response = await request.json();
          if (response.success) {
            setSearchResults(response.users);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.log(error.message);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    },
    [token]
  );
  const debouncedSearch = useCallback(
    debounce((term) => {
      performSearch(term);
    }, 3000),
    [performSearch]
  );
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };
  return (
    <>
    <div className="nav-wrapper">
      <main className='d-flex justify-content-between align-items-center container nav-container'>
        {/* search section */}
        <section className='d-flex gap-3 align-items-center search-div'>
          <div className='logo-div d-none d-lg-block'>
            <img src={logoImg} alt='' />
          </div>
          <ProfileSection />

          <div className='position-relative'>
            <input
              type='text'
              className='rounded-pill ps-5 search-box '
              placeholder='search'
              value={searchTerm}
              onChange={handleSearch}
            />
            <img
              src={searchImg}
              alt=''
              className='position-absolute img-fluid search-img'
            />
            <div>
                    {searchTerm && (
                      <div className="search-results position-absolute z-1 bg-secondary text-white border rounded w-100">
                        {searchResults.length ? (
                          searchResults.map((user) => (
                            <div key={user._id} className="search-result-item">
                              <Link
                                className="text-decoration-none text-white"
                                to={`/singleuserprofile/${user._id}`}
                              >
                                {user.userName}
                              </Link>
                            </div>
                          ))
                        ) : (
                          <div className="search-no-results">
                            No results found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
          </div>
        </section>

        {/* profile section */}
        <div className='d-none d-lg-block d-md-block'>
          <section className='d-flex gap-3 align-items-center position-relative'>
            <div className='d-flex flex-column align-items-center'>
              <Link to='/'>
                <img src={homeImg} alt='' />
              </Link>
              <span>Home</span>
            </div>
            <div className='d-flex flex-column align-items-center'>
              <img src={communityImg} alt='' />
              <span>Community</span>
            </div>
            <div className='d-flex flex-column align-items-center '>
              <Link to='/profile'>
                <img src={profileImg} alt='' />
              </Link>
              <span className='d-flex'>
                Me
                <span
                  // className='d-none   d-lg-block'
                  role='button'
                  onClick={handleDrop}
                >
                  {bagShow ? <GoChevronUp /> : <GoChevronDown />}
                </span>
              </span>
            </div>
            <div className='position-absolute nav-bag'>
              {bagShow && <NavBag />}
            </div>
          </section>
        </div>
      </main>
      </div>
    </>
  );
};

export default Navbar;