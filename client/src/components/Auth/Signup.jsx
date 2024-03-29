import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../redux/reducers/auth/auth.action";

function Signup() {
  
  const [userData ,setUserData] = useState({
    email : '',
    password : '',
    userName : ''
  })

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData((prev) => ({...prev, [e.target.id] : e.target.value}))
  }

  const onSignUp = () => {
    dispatch(signUp(userData))
  }
  return (
    <>
      <div
        style={{ minHeight: 384 }}
        className="flex flex-col items-center justify-center md:h-auto w-full md:w-1/2 border-2 border-gray-400 mx-3 px-4 py-8"
      >
        <div className="w-2/5">
          <img
            src="data:image/png;base64,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"
            className="w-auto h-auto"
            alt="Instagram"
          />
        </div>
        <div className="my-3">
            <h1 className="text-xl text-center">Sign up to see photos and videos from your friends.</h1>
        </div>
        <div className="flex flex-col w-2/3">
          <div className="relative border-2 border-black w-full mt-4 rounded-sm">
            <input
              type="text"
              id="email"
              onChange={handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-gray-300 border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Email
            </label>
          </div>
          <div className="relative border-2 border-black w-full mt-4 rounded-sm">
            <input
              type="text"
              id="userName"
              onChange={handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-gray-300 border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="userName"
              className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Username
            </label>
          </div>
          <div className="relative border-2 border-black w-full mt-4 rounded-sm">
            <input
              type="text"
              id="name"
              onChange={handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-gray-300 border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Full Name
            </label>
          </div>
          <div className="relative border-2 border-black w-full mt-4 rounded-sm">
            <input
              type="text"
              id="password"
              onChange={handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-gray-300 border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Password
            </label>
          </div>
          <div className="my-3">
            <h1 className="text-xl text-center">People who use our service may have uploaded your contact information to Instagram.</h1>
          </div>
          <div className=" w-full mt-4">
            <button onClick={onSignUp} className=" rounded-lg border-2 border-black w-full bg-blue-500 font-serif text-lg">
              Sign Up
            </button>
          </div>
          <div className="w-full flex flex-row mt-5 justify-between">
            <div className="w-2/5 relative border-t-2 border-gray-500 top-3"></div>
            <div>OR</div>
            <div className="w-2/5 relative border-t-2 border-gray-500 top-3"></div>
          </div>
          <div className="flex justify-center w-full mt-5">
            <p className=" text-lg">
              Have an account ?{" "}
              <Link className="text-blue-600 font-bold" to={`/login`}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
