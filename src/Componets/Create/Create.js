import React, { useState } from "react";
import './Create.css'
import { FaCamera } from "react-icons/fa";

const Create = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const createPost = (e) => {
    e.preventDefault();
    // create({ title, image });
    // setTitle("");
    // setImage("");
  };
  return (
    <>

        <div className="create">
          <form onSubmit={createPost}>
            <div className="create__input">
              <input
                type="text"
                className="create__inputt"
                placeholder="What are in your mind..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div className="create__second">
              <div className="create__second-a">
                <label htmlFor="file">
                  <FaCamera className="camera" />
                </label>
                <input
                  type="file"
                  className="file"
                  onChange={handleImage}
                  id="file"
                  required
                />
              </div>
              <div className="create__second-b">
                <input type="submit" value="Create" className="btn-sweet" />
              </div>
            </div>
          </form>
        </div>
      
    </>
  );
};

export default Create;
