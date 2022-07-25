import React, { Component } from "react";
import "./post.css";

    class Post extends Component {

      render() {

        return <div className="Post" >

            <div>

              <div className="Post-user">

                <div className="Post-user-profilepicture">

                  <img src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="Sarthak" />

                </div>

                <div className="Post-user-nickname">

                  <span>Sarthak</span>

                </div>

              </div>

            </div>

            <div className="Post-image">

              <div className="Post-image-bg">

                <img alt="Icon Living" src="https://cdn-images-1.medium.com/max/1200/1*dMSWcBZCuzyRDeMr4uE_og.png" />

              </div>

            </div>

            <div className="Post-caption">

              <strong>Sarthak Kulkarni </strong> Web developer

            </div>

          </div>;

        }

    }

    export default Post;
