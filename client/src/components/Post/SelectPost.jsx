import React, { useEffect, useState, Component } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../../redux/reducers/image/image.action";

import { addPost } from "../../redux/reducers/post/post.action";

function ImageAdder(props) {
  return (
    <div className="w-full h-96 justify-center items-center">
      <div className="w-full flex justify-center items-center border-b-2 border-black">
        <p className="text-lg">Create New Post</p>
      </div>
      <div className="h-full flex justify-center items-center flex-col">
        <img
          src="https://kellygolightly.com/wp-content/uploads/2013/03/hearts.jpg"
          alt="Add Post"
          className="w-auto h-40"
        />
        <div
          style={{ textAlignLast: "center" }}
          className="w-full flex justify-center"
        >
          <input
            type="file"
            id="file"
            name="file"
            onChange={props.addPost}
            className="w-full text-lg file:rounded-lg file:bg-purple-600 p-4"
          />
        </div>
        <div className="absolute bottom-3 right-7 p-3">
          <button className="text-lg text-purple-900" onClick={props.onNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function PostAdder(props) {
  const dispatch = useDispatch();

  const imageData = useSelector((globalState) => globalState.image.image.image) 

  const [postData, setPostData] = useState({
    image: imageData._id,
    description: "",
  });

  function handleChange(e) {
    setPostData((prev) => ({
      image: imageData._id,
      description: e.target.value,
    }));
    console.log(postData);
  }

  function addPostToDb() {
    dispatch(addPost(postData))
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    props.closeModal();
  }

  return (
    <>
      <div className="w-full h-96 justify-center items-center flex flex-col">
        <div className="w-full flex justify-center items-center border-b-2 border-black">
          <p className="text-lg">Create New Post</p>
        </div>
        <div className="flex flex-row w-full h-auto my-2">
          <div className="w-3/5 h-full xs:flex hidden justify-center items-center">
            <img src={imageData.location} alt="Image" className="h-auto w-full" />
          </div>
          <div className="mx-4 w-auto">
            <div className="w-full flex flex-row my-4">
              <div className="w-7 h-7 rounded-full overflow-hidden mx-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
                  alt="profile"
                  className="w-auto h-auto"
                />
              </div>
              <h1 className="text-xl font-bold">prax_killer999</h1>
            </div>
            <div className="">
              <textarea
                className="border-2 border-black"
                placeholder="Write a caption"
                name="caption"
                id="caption"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="absolute bottom-3 right-7 p-3">
              <button className="text-lg text-purple-900" onClick={addPostToDb}>
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SelectPost(props) {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState("");
  const [isPost, setIsPost] = useState(false);

  const dispatch = useDispatch();

  const body = new FormData();

  function addPost(e) {
    setImage(e.target.files[0]);
  }

  function onNext() {
    if (image) setIsPost(true);
  }

  useEffect(() => {
    body.append("file", image);
    image &&
      dispatch(addImage(body))
        .then((data) => {
          setImageData(data.payload.image);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [image]);

  return (
    <>
      {isPost === true ? (
        <PostAdder
          closeModal={props.closeModal}
        />
      ) : (
        <ImageAdder onNext={onNext} addPost={addPost} />
      )}
    </>
  );
}

export default SelectPost;
