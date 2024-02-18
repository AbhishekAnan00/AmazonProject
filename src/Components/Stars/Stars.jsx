import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";

export const Stars = ({ stars , reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span Key={elem}>
        {stars >= index + 1 ? (
          <IoStar />
        ) : stars >= numbers ? (
          <IoStarHalf />
        ) : (
          <IoMdStarOutline />
        )}
      </span>
    );
  });
  return (
    <>
  <div className="flex text-2xl" style={{color: "orange"}}>
    {ratingStar}
  </div> 
  <p>customer reviews : {reviews}</p>
  </>
  )
}
