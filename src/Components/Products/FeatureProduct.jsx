import React from 'react'
import { useProductContext } from '../../Context/ProductContext';
import { Product } from './Product';

export const FeatureProduct = () => {
  const { isLoading , featureProducts } = useProductContext();
  // console.log(featureProducts);
  if(isLoading){
    return <div>.....loading</div>
  }
  return (
    <div className="section bg-slate-300">
    <div className="container ml-10">
      <div className="heading text-center text-2xl">our feature services</div>
      <div className="grid grid-cols-3 gap-10 absolute top-[350px]">
        {
          featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem}/>
          })
        }
      </div>
    </div>
  </div>
  )
}
