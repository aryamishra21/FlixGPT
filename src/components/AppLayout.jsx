import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";

const AppLayout = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate('/browse')
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate('/')
            }
          });
    },[])

    return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
