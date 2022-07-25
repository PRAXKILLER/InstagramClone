import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="Post">
      <div>
        <div className="Post-user">
          <div className="Post-user-profilepicture">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt="Sarthak Kulkarni"
            />
          </div>

          <div className="Post-user-nickname">
            <span>Sarthak Kulkarni</span>
          </div>
        </div>
      </div>

      <div className="Post-image">
        <div className="Post-image-bg">
          <img
            alt="Icon Living"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
        </div>
      </div>

      <div className="Post-caption">
        <strong>Sarthak Kulkarni </strong> Web Developer
      </div>
    </div>
  );
}

export default Post;
