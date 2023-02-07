import React from "react";

function LoginPage({children}) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-row">
        <div className="hidden md:flex justify-center w-1/2">
          <div className="w-full ml-8 flex justify-center items-center">
            <img
              src="https://www.pngitem.com/pimgs/m/299-2998371_iphone-instagram-png-transparent-png.png"
              alt="instagram"
              className="w-auto h-auto"
            />
          </div>
        </div>
        <>{children}</>
      </div>
    </div>
  );
}

export default LoginPage;
