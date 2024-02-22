import React, { useState } from "react";

export const Images = ({ Imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(Imgs[0]);
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 sm:relative sm:left-0">
        <div className="sm:grid sm:grid-rows-4 sm:relative sm:right-40 gap-2 sm:mt-10">
          {Imgs.map((curElem, index) => {
            return (
              <figure key={index}>
                <img
                  src={curElem.url}
                  alt={curElem.filename}
                  key={index}
                  className="single-product-img h-20 w-20 ml-40 mr-5"
                  onClick={() => setMainImage(curElem)}
                />
              </figure>
            );
          })}
        </div>
        <div className="sm:absolute sm:mt-10 sm:ml-12 sm:w-80">
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className="main-image h-60 mt-10 ml-10 "
          />
        </div>
      </div>
    </>
  );
};
