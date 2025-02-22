import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/store/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const user = useSelector(store=>store.user);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(()=>{
            navigate('/')
        }).catch((error)=>{
            console.log('error',error)
            // navigate()
        })
    }
  return (
    <div className="flex fixed top-0 z-10 bg-gradient-to-b from-black w-full px-32 py-4 justify-between">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
