import React, { useState } from "react";

export const Images = ({ Imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(Imgs[0]);
  return (
    <>
      <div className="flex gap-2">
        <div className="gap-2">
          {Imgs.map((curElem, index) => {
            return (
              <figure key={index}>
                <img
                  src={curElem.url}
                  alt={curElem.filename}
                  key={index}
                  className="single-product-img h-20 w-20 lapi:ml-40 mr-5 phone-sm:ml-0"
                  onClick={() => setMainImage(curElem)}
                />
              </figure>
            );
          })}
        </div>
        <div>
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className="main-image h-60 mt-10 lapi:ml-10 phone-sm:ml-0"
          />
        </div>
      </div>
    </>
  );
};
