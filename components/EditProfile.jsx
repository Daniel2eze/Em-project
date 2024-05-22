import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import editImg from '../src/assets/edit-2.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../src/Styles/EditProfile.css';
import bioImg from '../src/assets/bio-img.svg';
import ageImg from '../src/assets/age-img.svg';
import profilephotoimg from '../src/assets/profilePhoto-img.svg'
import genderImg from '../src/assets/gender-img.svg';
import locationImg from '../src/assets/location-img.svg';
import occupationImg from '../src/assets/occupation-img.svg';
import xImg from '../src/assets/x-img.svg';
import linkedinImg from '../src/assets/linkedin-logo.svg';
import toast from 'react-hot-toast';
import { Toast } from 'bootstrap';

function EditProfile(props) {
  const [bioProfile, setBioProfile] = useState([]);
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [x, setX] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [lgShow, setLgShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(adding);

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = ()=>{
      setPreview(reader.result);
    };
    if (file) {
      reader.readerAsDataURl(file);
    }
  };
  // handle submit
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("bio", bio);
    formData.append("age", age);
    formData.append("location", location);
    formData.append("gender", gender);
    formData.append("occupation", occupation);
    formData.append("x", x);
    formData.append("linkedIn", linkedIn);
    if (selectedFile) {
      formData.append("profilePhoto", selectedFile);
    }
    
    try {
      const response = await fetch("http://localhost:5780/aphttpi/v1/users/update-profile", {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      if(result){
        setIsCllicked(true)
        toast.success(result.message)
      }
    } catch (error) {
      console.error("Error updating profile:",error);
    }
  }


  const token = localStorage.getItem("clientToken");
  const navigate = useNavigate();
  const getBioProfile = async()=>{
    try {
      const request = await fetch("http://localhost:5780/api/v1/users",{
        headers:{
          "Content-type":"application/json",
          Authorization:Bearer `${token}`
        }
      });
      const response = await request.json();
      // console.log(response.user);
      setBioProfile(response.user);
      setBio(response.user.bio);
      setLocation(response.user.location);
      setOccupation(response.user.occupation);
      setX(response.user.x);
      setLinkedIn(response.user.linkedIn);
      setAge(response.user.age || "");
      setGender(response.user.gender || "");
      setPreview(response.user.ProfilePhoto || profileImg);
    } catch (error) {
      console.log(error.message);
    }
  };
useEffect(() => {
  if (!token) {
    toast.error("unauthorized, sign in");
    navigate("/signin")
  }
  getBioProfile();
}, []);

  return (
    <>
      <Link>
        <img src={editImg} alt='' onClick={() => setLgShow(true)} />
      </Link>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id='example-modal-sizes-title-lg'>
            Large Modal
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <section className=' '>
            {/* first div */}
            
                {/* form */}
                <form className='edit-form row justify-content-between align-item-center w-100 gap-4'>
                  enct
                <div className='col-lg-5'>
              <h5>
                Hi, <span className='text-primary'>John Doe</span>
              </h5>
              <h3>Complete Your Profile</h3>
              <img src={preview} alt='' className='edit-profile-img' />
              <input
                type='file'
                name=''
                className='rounded w-100 select-img bg-white border-primary'
                onChange={handleFileChange}
              />
            </div>

            {/* second div */}
            <div className='col-lg-5 d-lg-flex  align-items-center justify-content-center'>
              <div className='wrapper   '>
                <h5 className='mt-3 basic-h5'>Basic Information</h5>
                  {/* text area */}
                  <div className='position-relative'>
                    <textarea
                      name=''
                      className='rounded bio-input utils'
                      placeholder='Bio'
                      cols='30'
                      rows='5'
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                    <img
                      src={bioImg}
                      className='position-absolute top-0 start-0 ms-1 mt-1'
                      alt=''
                    />
                  </div>

                  {/* age and gender */}
                  <div className='position-relative  utils'>
                    <input
                      type='number'
                      className='age-input rounded me-1 '
                      placeholder='Age'
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                      type='text'
                      className='gender-input rounded'
                      placeholder='Gender'
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <img
                      src={ageImg}
                      alt=''
                      className='position-absolute start-0 age-img ms-2'
                    />
                    <img
                      src={genderImg}
                      alt=''
                      className='position-absolute gender-img '
                    />
                  </div>

                  {/* location */}
                  <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded  utils location-input'
                      placeholder='Location'
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <img
                      src={locationImg}
                      alt=''
                      className='position-absolute  start-0 location-input-img'
                    />
                  </div>

                  {/* occupation */}
                  <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded  utils occupation-input location-input'
                      placeholder='Occupation'
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                    <img
                      src={occupationImg}
                      alt=''
                      className='position-absolute ms-1 start-0 location-input-img'
                    />
                  </div>

                  {/* socials */}
                  <h5 className='mt-3 socials-header'>Socials</h5>
                  {/*twitter*/}
                  <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded utils twitter-input location-input'
                      placeholder='X App'
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                    />
                    <img
                      src={xImg}
                      alt=''
                      className='position-absolute ms-1 start-0 location-input-img'
                    />
                  </div>

                   {/*linkedin*/}
                   <div className='position-relative mt-1'>
                    <input
                      type='text'
                      className='rounded utils twitter-input location-input'
                      placeholder='Linkedin'
                      value={linkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                    />
                    <img
                      src={linkedinImg}
                      alt=''
                      className='position-absolute ms-1 start-0 location-input-img'
                    />
                  </div>

                  {/* submit */}
                  <button className="btn rounded-pill continue-btn btn-lg text-white utils mt-3 btn-primary">Continue</button>
                </div>
                </div>
                </form>
         
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditProfile;