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
  }, [id]);

  if (isSingleLoading) {
    return <div>...loading</div>;
  }

  return (
    <Layout>
      <div className="mt-6 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* product image */}
          <div>
            <Images Imgs={image} />
          </div>

          {/* product-data */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <Stars stars={stars} reviews={reviews} />

            <p className="text-gray-700">
              <b>MRP:</b> <del><FormatPrice price={price + 250000} /></del>
            </p>

            <p className="text-gray-900">
              <b>Deal of the Day:</b> <FormatPrice price={price} />
            </p>

            <p className="text-gray-600">{description}</p>

            <p><b>Available:</b> {stock > 0 ? "In Stock" : "Not Available"}</p>
            <p><b>Brand:</b> {company}</p>

            <hr className="mt-4" />

            {stock > 0 && <AddToCart product={SingleProduct} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};
