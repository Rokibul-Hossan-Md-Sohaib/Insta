import React from "react";
import './Sidebar.css'
const Sidebar = () => {
  const [state] = React.useState([
    { id: 1, image: "/images/salman.jpg", name: "Salman" },
    { id: 2, image: "/images/sakib.jpg", name: "Sakib" },
    { id: 1, image: "/images/ami.jpg", name: "Shahid" },
  ]);
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <a href="">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
