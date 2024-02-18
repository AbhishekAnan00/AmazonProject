import React, { useEffect } from "react";
import { useProductContext } from "../../Context/ProductContext";
import { Stars } from "../Stars/Stars";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { Images } from "../Images/Images";
import { AddToCart } from "../Cart/AddToCart";
import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";

const API = "https://api.pujakaitem.com/api/products";

export const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, SingleProduct } =
    useProductContext();

  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    image,
    description,
    category,
    stock,
    stars,
    reviews,
  } = SingleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return <div>...loading</div>;
  }
  return (
    <Layout>
      <div className="container p-10">
        <div className="grid grid-cols-2">
          {/* product image */}
          <div className="product-img">
            <Images Imgs={image} />
          </div>
          {/* product-data */}
          <div className="product-data ml-10">
            <b>{name}</b>
            <Stars stars={stars} reviews={reviews} />
            <p className="product-data-price">
              <b>MRP</b> :
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p>
              <b> Deal of the Day : </b> <FormatPrice price={price} />
              <p>{description}</p>
            </p>
            <b>Available : {stock > 0 ? "In Stock" : "Not Available"}</b>
            <p> Brand : {company}</p>
            <hr className="mt-5" />
            {stock > 0 && <AddToCart product={SingleProduct} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};
