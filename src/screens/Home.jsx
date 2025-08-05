import React, { useState } from "react";
import Carousel from "../components/Carousel";
import MainCard from "../components/MainCard";

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
        <Carousel srch={{search, setSearch}}/>
        <MainCard search={search}/>
    </div>
  )
};

export default Home;
