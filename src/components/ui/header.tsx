"use client";
import { RiShoppingBag4Fill } from "react-icons/ri";
import Sheet from "../sheet";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { toggleState } from "@/lib/redux/slices/cartState";

const Header = ({ logo, menuItems, buttonLabel }: any) => {
  // finding pathname
  const pathname = usePathname();
  const dispatch = useDispatch();

  return (
    <header className="flex border-b mb-5 border-gray-300 py-3 px-4 sm:px-10 bg-white min-h-[65px] tracking-wide relative z-10">
      <div className="flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
        <a href="#" className="max-sm:hidden">
          <img src={logo.full} alt="logo" className="w-[134px]" />
        </a>
        <a href="#" className="hidden max-sm:block">
          <img src={logo.short} alt="logo" className="w-8" />
        </a>

        <div className="max-lg:hidden lg:!block max-lg:w-full">
          <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            {menuItems.map((item: any) => (
              <li key={item.name} className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href={`${item.link}`}
                  className={`font-medium lg:hover:text-blue-700 block text-[15px] ${
                    pathname === item.link ? "text-blue-700" : "text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#"
                className="font-medium lg:hover:text-blue-700 block text-[15px]"
              >
                <RiShoppingBag4Fill
                  onClick={() => dispatch(toggleState())}
                  className="w-6 h-6"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#"
                className="font-medium lg:hover:text-blue-700 block text-[15px]"
              >
                <Button className="bg-red-600">{buttonLabel}</Button>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 ml-auto">
          <div className="flex max-w-xs w-full bg-gray-100 px-4 py-2.5 outline-none border focus-within:border-slate-900 transition-all">
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent outline-none pr-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="cursor-pointer fill-gray-400"
            >
              <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 005.303 2.197 7.498 7.498 0 005.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </div>

          <Sheet />
        </div>
      </div>
    </header>
  );
};

export default function () {
  return (
    <Header
      logo={{ full: "/logo.png", short: "/logo-short.png" }}
      menuItems={[
        { name: "Home", link: "/dashboard" },
        { name: "Products", link: "/dashboard/products" },
        { name: "About", link: "/dashboard/about" },
        { name: "Contact", link: "/dashboard/contact" },
      ]}
      buttonLabel="Shop Now"
    />
  );
}
