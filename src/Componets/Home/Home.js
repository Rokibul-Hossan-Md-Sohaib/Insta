import React from 'react';
import Create from '../Create/Create';
import Navs from '../Navs/Navs';
import Posts from '../Posts/Posts';
import Stories from '../Stories/Stories';
import Post from '../Post';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Navs/>
            <div className="container">
            <Stories/>
            <Create/>
            <Post/>
            <Sidebar/>
            {/* <Posts/> */}
            </div>
        </div>
    );
};

export default Home;