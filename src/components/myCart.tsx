"use client";
import { IMAGE_URL } from "@/constants/constant";
import {
  useDeleteToCartMutation,
  useGetMyCartQuery,
} from "@/lib/redux/api/cartApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../lib/redux/slices/cartState";
import SmallSpinner from "./smallSpinner";
import Spinner from "./spinner";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cartState } = useSelector((state: any) => state.cart);
  const { data, isFetching, refetch } = useGetMyCartQuery({});
  const [deleteProduct, { isLoading }] = useDeleteToCartMutation({});
  // console.log("🚀 ~ ShoppingCart ~ data:", data?.cart?.products);

  useEffect(() => {
    refetch();
  }, [cartState]);

  const products = data?.cart?.products;
  const onRemove = async (id: any) => {
    const result = await deleteProduct({ productId: id });
    // console.log("🚀 ~ onRemove ~ result:", result);
    if (result?.data?.status) {
      alert("product deleted successfully!");
      refetch();
    } else {
      alert("something went wrong!");
    }
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`fixed inset-0 bg-gray-500/75 transition-opacity ${
          !cartState && "hidden"
        }`}
        aria-hidden="true"
      ></div>

      <div
        className={`fixed inset-0 overflow-hidden ${!cartState && "hidden"}`}
      >
        <div className="absolute inset-0 overflow-hidden ">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              {/* Inner Content */}
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {isFetching ? (
                  <div className="h-screen grid place-content-center">
                    <Spinner />
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={() => dispatch(toggleState())}
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="size-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {products?.length == 0 ? (
                        <div className="md:h-[400px] grid place-content-center">
                          Your Cart Is Empty
                        </div>
                      ) : (
                        <>
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {products?.map(
                                  (
                                    { product }: { product: any },
                                    index: number
                                  ) => (
                                    <li key={index} className="flex py-6">
                                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={`${IMAGE_URL}/${product?.image}`}
                                          alt={product?.description}
                                          className="size-full object-cover"
                                        />
                                      </div>
                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href="#">{product?.name}</a>
                                            </h3>
                                            <p className="ml-4">
                                              ${product?.price}
                                            </p>
                                          </div>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {product?.description}
                                          </p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p className="text-gray-500">
                                            Qty {products[index].quantity}
                                          </p>
                                          <div className="flex">
                                            <button
                                              type="button"
                                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                              onClick={() =>
                                                onRemove(product?._id)
                                              }
                                            >
                                              {isLoading ? (
                                                <SmallSpinner />
                                              ) : (
                                                "Remove"
                                              )}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${data?.cart?.total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
