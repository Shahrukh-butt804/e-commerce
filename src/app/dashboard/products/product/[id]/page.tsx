"use client";
import Spinner from "@/components/spinner";
import { IMAGE_URL } from "@/constants/constant";
import { useGetProductByIdQuery } from "@/lib/redux/api/productApi";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const ProductPage = () => {
  const [image, setImage] = useState(1);
  const { id } = useParams<{ id: string }>();
  // console.log("🚀 ~ ProductPage ~ id:", id)
  const { data, isFetching } = useGetProductByIdQuery({ id });
  const product = data?.product;
  // console.log("🚀 ~ ProductPage ~ product:", product);

  if (isFetching) return <Spinner />;

  return (
    <div className="antialiased">
      <div className="py-6 mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span className="text-5xl">
                <img
                  src={`${IMAGE_URL}/${product?.image}`}
                  alt="bottts"
                  className="rounded-lg mx-auto object-center"
                />
              </span>
            </div>
            <div className="flex -mx-2 my-40">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 px-2">
                  <button
                    onClick={() => setImage(i)}
                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                      image === i ? "ring-2 ring-indigo-300 ring-inset" : ""
                    }`}
                  >
                    <span className="text-2xl">
                      <img
                        src={`${IMAGE_URL}/${product?.image}`}
                        alt="bottts"
                        className="rounded-lg mx-auto"
                      />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {product?.name}
            </h2>
            <p className="text-gray-500 text-sm">
              By{" "}
              <a href="#" className="text-indigo-600 my-4 hover:underline">
                ABC Company
              </a>
            </p>
            <div className="flex items-center space-x-4 my-4">
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1 text-xl">$</span>
                <span className="font-bold text-indigo-600 text-3xl">
                  {product?.price}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>
            <p className="text-gray-500">{product?.description}</p>
            <div className="flex py-4 space-x-4">
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
