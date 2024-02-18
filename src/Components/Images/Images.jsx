import React, { useState } from "react";

export const Images = ({ Imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(Imgs[0]);
  return (
    <>
      <div className="flex mr-5 ">
        <div className="grid grid-rows-4 gap-1">
          {Imgs.map((curElem, index) => {
            return (
              <figure key={index}>
                <img
                  src={curElem.url}
                  alt={curElem.filename}
                  key={index}
                  className="h-20 w-20 ml-40 mr-5"
                  onClick={() => setMainImage(curElem)}
                />
              </figure>
            );
          })}
        </div>
        <div className="main-image">
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className=" h-60 mt-10 ml-10 "
          />
        </div>
      </div>
    </>
  );
};
