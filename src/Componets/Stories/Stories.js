import React from "react";
import './Stories.css'
const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/pic1.jpg", name: "shakil432" },
    { id: 2, image: "/images/pic1.jpg",name: "ahsan32" },
    { id: 3, image: "/images/pic1.jpg", name: "babar42" },
    { id: 4, image: "/images/pic1.jpg",name: "fawad2" },
    { id: 5, image: "/images/pic1.jpg", name: "feroz432" },
    { id: 6, image: "/images/pic1.jpg",name: "adil5" },
    { id: 7, image: "/images/sakib.jpg",name: "imran4" },
    { id: 8, image: "/images/pic1.jpg",name: "khan4" },
    { id: 9, image: "/images/cr7.jpg", name: "alikhan4" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
