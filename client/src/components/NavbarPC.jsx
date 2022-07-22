import React from "react";

export default function NavbarPC(){
    return <div>
        <nav class="flex items-center flex-col box-border container z-3 bg-white-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
     <img 
     class="object-left h-29 w-103"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png?20160616034027"
        alt="insta"
     />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
        Chats
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
        Add Post
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
        Profile
      </a>
    </div>
  </div>
</nav>
    </div>
};

