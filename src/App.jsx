import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "../src/Auth/Signup";
import Signin from "../src/Auth/Signin";
import Resetpassword from "./Auth/Resetpassword";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import FriendProfileSection from "../components/FriendProfileSection";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/SignUp" element={<Signup />}></Route>
          <Route path="/Resetpassword" element={<Resetpassword />}></Route>
          <Route path="/friendprofilesection" element={<FriendProfileSection />}></Route>

        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
