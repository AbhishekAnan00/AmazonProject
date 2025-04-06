import React from "react";
import { FilterSection } from "../FilterSection/FilterSection";
import { Sort } from "../Sort/Sort";
import { ProductList } from "./ProductList";
import { Layout } from "../Layout/Layout";

export const Products = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:gap-8 px-4 md:px-8 py-6">
        <aside className="w-full md:w-1/4 mb-6 md:mb-0">
          <FilterSection />
        </aside>

        <main className="w-full md:w-3/4 flex flex-col gap-6">
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </main>
      </div>
    </Layout>
  );
};
