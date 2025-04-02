"use client";

import CategoryFilter from "@/components/categoryFilter";
import ProductTable from "@/components/gridCard";
import ProductCard from "@/components/productCard";

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <ProductCard />
    </div>
  );
};

import React, { useState } from "react";

const colors = {
  name :"Colors",
  value :["White", "Beige", "Blue", "Brown", "Green", "Purple"]
};
const sizes = {
  name: "Sizes",
  value: ["S", "M", "L", "XL"]
};

export default function page() {
  const [sortOpen, setSortOpen] = useState(false);
  const [toggleCardView, setToggleCardView] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <div className="bg-white ">
        <div>
          <div
            className="relative z-30 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`fixed inset-0 bg-black/25 ${
                filterOpen ? "hidden" : "flex"
              }`}
              aria-hidden="true"
            ></div>
            {/* Mobile Side bar Filters */}
            <div
              className={`fixed inset-0 z-40  ${
                filterOpen ? "hidden" : "flex"
              }`}
            >
              <div className="relative ml-auto flex size-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      onClick={() => setFilterOpen(!filterOpen)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                  
                  
                  {/* mobile Category filter  */}
                <form className="mt-4 border-t border-gray-200">
                <CategoryFilter category={[colors,sizes]} />
                </form>
              </div>
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              {/* Options For products */}
              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      id="menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => {
                        setSortOpen(!sortOpen);
                      }}
                    >
                      Sort
                      <svg
                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Sorting Options */}
                  {sortOpen ? (
                    <>
                      <div
                        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 focus:outline-hidden"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                      >
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm font-medium text-gray-900"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                          >
                            Most Popular
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                          >
                            Best Rating
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-2"
                          >
                            Newest
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-3"
                          >
                            Price: Low to High
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-4"
                          >
                            Price: High to Low
                          </a>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                  onClick={() => {
                    setToggleCardView(!toggleCardView);
                  }}
                >
                  <span className="sr-only">View grid</span>
                  <svg
                    className="size-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Mobile Filter button */}
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    className="size-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    onClick={() => {
                      setFilterOpen(!filterOpen);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Filter Sections */}
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

                {/* Desktop Category filter */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <CategoryFilter category={[colors,sizes]} />
                </form>

                {/* Product List */}
                <div className="lg:col-span-3">
                  {toggleCardView ? (
                    <>
                      <ProductList />
                    </>
                  ) : (
                    <ProductTable />
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
