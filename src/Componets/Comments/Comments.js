import React, { useState } from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import './Comments.css'
const Comments = (props) => {
  const [state, setState] = useState("");
  const [count , setCount] =useState(0)
  const [data, setData] = useState( {
    user: {
      username: "joe-adam",
      name: "Joe Adam",
      profile_picture: "",
    },
  
        comments: [
         
          {
            posted_on: "1617220982",
            likes: 10,
            liked: true,
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
    }
  );   
  const [comments, setComments] = React.useState([]);
  const postComment = (e) => {
    e.preventDefault();
    setState("");
  };

  return (
    <>
          <div className="show__reactions">
            <span className="reactions flex">
              <FaRegThumbsUp onClick={() => setCount(count +1)}/> <span className="reactions-text">{count}</span>
        
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
    <div className="comments">
      {data.comments.map((comment) => (
        <div className="comments__container" key={comment.created_at}>
          <div className="comments__container-name">{comment.user.username}</div>
          <div className="comments__container-msg">{comment.text}</div>
        </div>
      ))}
       
      <div className="comments__section ">
     
          <form onSubmit={postComment} className="flex">
            <input
              type="text"
              className="comment__input"
              placeholder="Add a comment.."
              onChange={(e) => setState(e.target.value)}
              value={state}
              required
            />
     
          </form>
        
      </div>
    </div>
    </>
  );
};

export default Comments;
