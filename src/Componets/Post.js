import React, { useState } from "react";
import '../Componets/Posts/Posts.css'
import Comments from "./Comments/Comments";
// import Comment from "./Comments";
const Posts = () => {

    const [data, setData] = useState( {
        user: {
          username: "joe-adam",
          name: "Joe Adam",
          profile_picture: "",
        },
        posts: [
          {
            id: "8402678390264947303",
            users: {
              username: "adam",
              name: "Adam",
              userImg: "/images/ami.jpg",
              postImg: "/images/cr7.jpg",
              profile_picture: "",
            },
            posted_on: "1617220982",
            likes: 10,
            liked: true,
            comments: [
              {
                text: "Hello!",
                created_at: "1617220982",
                user: {
                  username: "adam",
                  name: "Adam",
                  userImg: "/images/pic1.jpg",
                  profile_picture:  "/images/pic1.jpg",
                },
              },
            ],
          },
        ],
      }
      );   
      
      
      return (
    <>
      {data.posts.map((post) => (
        <div className="posts">
          <div className="posts__header">
            <div className="posts__header-avator">{post.users.userImg}</div>
            <div className="posts__header-name">{post.users.name}</div>
          </div>
          <div className="posts__img">
            <img src={post.users.postImg} />
          </div>
          <Comments/>
        </div>
      ))}
    </>
  );
};

export default Posts;