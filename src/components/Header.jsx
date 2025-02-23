import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/store/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {Logo} from '../utils/constants'
const Header = () => {
    const user = useSelector(store=>store.user);
    const dispatch = useDispatch();
    // const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(()=>{
        }).catch((error)=>{
            console.log('error',error)
            // navigate('/error')
        })
    }
  return (
    <div className="flex fixed top-0 z-10 bg-gradient-to-b from-black w-full px-32 py-4 justify-between">
      <img
        src={Logo}
        className="w-[12rem] h-[5rem]"
        alt=""
      />
{ user &&    
      <div className="p-2 flex gap-6 items-center">
        <img src={user?.photoURL} alt="usericon" className="size-[2.5rem] object-cover rounded-lg" />
        <p className="font-semibold">{user?.displayName}</p>
        <button
          className="px-3 h-[2.5rem] text-sm font-semibold bg-red-600 text-white rounded-lg"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>
        }
    </div>
  );
};

export default Header;
