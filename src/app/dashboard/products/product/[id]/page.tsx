"use client";
import Spinner from "@/components/spinner";
import { IMAGE_URL } from "@/constants/constant";
import { useAddToCartMutation } from "@/lib/redux/api/cartApi";
import { useGetProductByIdQuery } from "@/lib/redux/api/productApi";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState(1);
  const [value, setValue] = useState(1);

  // console.log("🚀 ~ ProductPage ~ id:", id)
  const { data, isFetching } = useGetProductByIdQuery({ id });
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const product = data?.product;
  // console.log("🚀 ~ ProductPage ~ product:", product);

  const handleDecrement = () => {
    setValue((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  async function handleAddToCart() {
    const result = await addToCart({ productId: product._id, quantity: value });
    if (result?.data?.status == 200) {
      alert("Product added to cart");
      setValue(1);
    } else {
      alert("Something went wrong");
    }
  }

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
                disabled={isLoading}
                type="button"
                className="h-12 px-4  font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              {/* Quatity */}
              <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center gap-x-1.5">
                  <button
                    disabled={isLoading}
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleDecrement}
                    aria-label="Decrease"
                  >
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <input
                    className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 appearance-none"
                    type="text"
                    aria-roledescription="Number field"
                    value={value}
                    readOnly
                  />
                  <button
                    disabled={isLoading}
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleIncrement}
                    aria-label="Increase"
                  >
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
