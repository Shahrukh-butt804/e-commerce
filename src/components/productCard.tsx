"use client";
import React from "react";
import { IMAGE_URL } from "@/constants/constant";
import { useGetAllProductsQuery } from "@/lib/redux/api/productApi";
import Spinner from "./spinner";

export default function ProductCard() {
  const { data, isFetching, isError } = useGetAllProductsQuery({});
  // console.log("🚀 ~ ProductCard ~ data:", data);

  const plants = [
    {
      name: "Peace Lily",
      type: "Indoor",
      price: "$36.00",
      bgColor: "bg-orange-500",
      textColor: "text-orange-500",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
  ];

  if (isFetching) return <Spinner />;
  if (isError) return <div className="text-red-500 text-lg">Something Went Wrong!</div>;

  return (
    <div className="p-1 flex flex-wrap items-center justify-start">
      {data?.products?.length > 0 &&
        data?.products.map((product: any, index: number) => (
          <div
            key={index}
            className={`flex-shrink-0 m-6 relative overflow-hidden ${product?.bgColor} rounded-lg max-w-[250px] shadow-lg`}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <img
                className="relative w-40 h-40"
                src={`${IMAGE_URL}/${product?.image}`}
                alt={product?.name}
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">
                {product?.category}
              </span>
              <div className="flex justify-between">
                <span className="block font-semibold text-[13px]">
                  {product?.name}
                </span>
                <span
                  className={`block bg-white rounded-full ${product?.textColor} text-xs font-bold px-3 py-2 leading-none flex items-center`}
                >
                  {product?.price}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
