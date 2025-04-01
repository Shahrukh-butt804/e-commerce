import React, { useState } from "react";
import { RxValue } from "react-icons/rx";

export default function CategoryFilter({ category }: any) {


  return (
    <>
      <h3 className="sr-only">Categories</h3>
      <ul role="list" className="py-3 px-3 md:px-0 font-medium text-gray-900">
        <li>
          <a href="#" className="block py-3">
            Totes
          </a>
        </li>
        <li>
          <a href="#" className="block py-3">
            Backpacks
          </a>
        </li>
        <li>
          <a href="#" className="block py-3">
            Travel Bags
          </a>
        </li>
        <li>
          <a href="#" className="block py-3">
            Hip Bags
          </a>
        </li>
        <li>
          <a href="#" className="block py-3">
            Laptop Sleeves
          </a>
        </li>
      </ul>


      {/* Category filter */}
      {/* <div className="border-b border-gray-200 py-6 mx-4 md:mx-0">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="font-medium text-gray-900">Category</span>
            <span className="ml-6 flex items-center">
              {isOpen ? (
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M4 10h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg>
              )}
            </span>
          </button>
        </h3>

        {isOpen && (
          <div className="pt-6">
            <div className="space-y-4">
              {category?.map((val: any, index: number) => (
                <div key={val} className="flex gap-3">
                  <div className="flex h-5 items-center">
                    <input
                      id={`filter-color-${index}`}
                      type="checkbox"
                      value={val}
                      checked={selectedColors.includes(val)}
                      onChange={() => handleCheckboxChange(val)}
                      className="size-4 border border-gray-300 rounded-sm checked:bg-indigo-600 checked:border-indigo-600"
                    />
                  </div>
                  <label
                    htmlFor={`filter-color-${index}`}
                    className="text-sm text-gray-600"
                  >
                    {val}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}
      {category?.map((category : any) =>{
        return(
          <CategoryComp category={category} />
        )
      })

      }
    </>
  );
}


function CategoryComp({category}: any){

  const [isOpen, setIsOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState<any>([]);

  const handleCheckboxChange = (color: any) => {
    setSelectedColors(
      (prev: any) =>
        prev.includes(color)
          ? prev.filter((c: any) => c !== color) // Remove if already selected
          : [...prev, color] // Add if not selected
    );
  };

  return(
    <>
      <div className="border-b border-gray-200 py-6 mx-4 md:mx-0">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="font-medium text-gray-900">{category?.name}</span>
            <span className="ml-6 flex items-center">
              {isOpen ? (
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M4 10h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg>
              )}
            </span>
          </button>
        </h3>

        {isOpen && (
          <div className="pt-6">
            <div className="space-y-4">
              {category?.value?.map((val: any, index: number) => (
                <div key={val} className="flex gap-3">
                  <div className="flex h-5 items-center">
                    <input
                      id={`filter-color-${index}`}
                      type="checkbox"
                      value={val}
                      checked={selectedColors.includes(val)}
                      onChange={() => handleCheckboxChange(val)}
                      className="size-4 border border-gray-300 rounded-sm checked:bg-indigo-600 checked:border-indigo-600"
                    />
                  </div>
                  <label
                    htmlFor={`filter-color-${index}`}
                    className="text-sm text-gray-600"
                  >
                    {val}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div></>
  )
}
