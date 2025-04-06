import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Layout } from "./Components/Layout/Layout";
import { HomeProductList } from "./HomeProductList";
import {HomeCorousel} from "./HomeCorousel"
export const Home = () => {
  const HeroList = [
    {
      id: 1,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/aprilGW/2x._CB547209600_.jpg",
    },
    {
      id: 2,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/UBS/April/Shoes/Unrec/PC/New/1221._CB546844777_.jpg",
    },
    {
      id: 3,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img25/Sports/March/Kidssports_store/GW/Updated/5298_Sports_-_Kids_sports_slam_heros-PC_-_3000x1200._CB547155011_.jpg",
    },
    {
      id: 4,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? HeroList.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === HeroList.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <Layout>
        <div className="relative w-full max-w-screen mx-auto overflow-hidden">
          <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl z-10 cursor-pointer bg-white rounded-full shadow-md p-1"
            onClick={prevSlide}
          >
            <MdOutlineKeyboardArrowLeft />
          </div>

          <div className="w-full h-auto">
            {HeroList.map((item, index) => (
              current === index && (
                <img
                  src={item.cover}
                  key={item.id}
                  alt={`hero-${index}`}
                  className="w-full h-auto object-cover rounded"
                />
              )
            ))}
          </div>

          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl z-10 cursor-pointer bg-white rounded-full shadow-md p-1"
            onClick={nextSlide}
          >
            <MdKeyboardArrowRight />
          </div>
        </div>

        <HomeProductList />
        <HomeCorousel/>
      </Layout>
    </>
  );
};
