import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Header } from "./components";
import {
  AboutUs,
  Account,
  Dialog,
  ErrorPage,
  Exit,
  Help,
  Home,
  Login,
  Registration,
  Results,
} from "./pages";
import {
  setAuth,
  setCountry,
  setEmail,
  setFullName,
  setImage,
  setPassword,
  setPhone,
} from "./features/user/userSlice";
import "./App.sass";

function App() {
  const dispatch = useDispatch();
  const localToken = localStorage.getItem("Token");
  async function loadUserData(): Promise<void> {
    try {
      const response = await axios.post(
        "/users/user-info",
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      );
      dispatch(setEmail(response.data.email));
      dispatch(setPassword(response.data.password));
      dispatch(setFullName(response.data.full_name));
      dispatch(setCountry(response.data.country));
      dispatch(setImage(response.data.image));
      dispatch(setPhone(response.data.phone));
      dispatch(setAuth(true));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (localToken) {
      loadUserData();
    }
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="/results" element={<Results />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/account" element={<Account />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="*" element={<ErrorPage HTTPErrorCode={404} />} />
      </Routes>
    </>
  );
}

export default App;
