import React from "react";
import "./post.css";


function Post() {

    return( <article className="Post" ref="Post">

        <header>

          <div className="Post-user">

            <div className="Post-user-profilepicture">

              <img src="E:\Web Development\HTML-personal site\Sk2.jpg" alt="Sarthak Kulkarni" />

            </div>

            <div className="Post-user-nickname">

              <span>Sarthak Kulkarni</span>

            </div>

          </div>

        </header>

        <div className="Post-image">

          <div className="Post-image-bg">

            <img alt="Icon Living" src="E:\Web Development\Insta post\post1.jpg" />

          </div>

        </div>

        <div className="Post-caption">

          <strong>Sarthak Kulkarni </strong> Web Developer

        </div>

      </article>
    );

}

export default Post;