import React, { useEffect, useState } from "react";
import Bio from "../components/Bio";
import { Link } from "react-router-dom";

const Community = () => {
  const [data, setdata] = useState([]);
  const getUsers = async () => {
    const request = await fetch("https://em-backend-chra.onrender.com/api/v1/users/all");
    const response = await request.json();
    console.log(response.users);
    setdata(response.users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <main className="container">
        <section className="row">
          <div className="border   bg-white rounded mt-3 h-50 stick1 col-lg-4 d-none d-lg-block ">
            <Bio />
          </div>
          <div className="rounded mt-3 col-lg-8">
            {/* <h1>community for all users</h1> */}
            <div>
              {data && data.length >= 1 ? (
                <>
                  {data?.map((datum) => {
                    const { profilePhoto, followers, userName, _id } = datum;
                    return (
                      <div
                        key={_id}
                        className="d-flex justify-content-between border mb-3 align-items-center p-4"
                      >
                        <Link className="text-decoration-none text-black" to={`/singleuserprofile/${_id}`}>
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={profilePhoto}
                            alt=""
                            className="profile-img"
                            style={{
                              borderRadius: "5rem",
                              height: "4rem",
                              width: "4rem",
                            }}
                          />
                          <div className="d-flex flex-column ">
                
                            <span className=""> {userName} </span>
                            <span className="">
                              {followers?.length} follower
                            </span>
                          </div>
                        </div>
                            </Link>
                        <div>
                          <button className="btn rounded-5 border">
                            follows +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <h2>No users yet</h2>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Community;