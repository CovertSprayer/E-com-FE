import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/skeletons/ProductCardSkeleton";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../store/slices/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, productStatus]);

  if (productStatus == 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 gap-y-10 max-w-[1400px] mx-auto">
      {productStatus == 'loading' && <ProductCardSkeleton cards={32}/>}

      {products.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Products;
