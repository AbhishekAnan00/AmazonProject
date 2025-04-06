import React from 'react';
import { useProductContext } from '../../Context/ProductContext';
import { Product } from './Product';

export const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div className="text-center py-10 text-xl font-medium">...loading</div>;
  }

  return (
    <section className="bg-slate-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
          Our Feature Services
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featureProducts.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </section>
  );
};
