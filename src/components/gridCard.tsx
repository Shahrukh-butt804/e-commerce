import { useGetAllProductsQuery } from "@/lib/redux/api/productApi";
import React from "react";
import Spinner from "./spinner";
import { IMAGE_URL } from "@/constants/constant";

export default function ProductTable() {
  const { data, isFetching } = useGetAllProductsQuery({});
  // console.log("🚀 ~ ProductCard ~ data:", data);

  const plants = [
    {
      name: "Peace Lily",
      type: "Indoor",
      price: "$36.00",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
  ];

  if (isFetching) return <Spinner />;

  return (
    <div className="p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b text-left">Image</th>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Type</th>
            <th className="py-2 px-4 border-b text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product: any, index: number) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border-b">
                <img
                  className="w-16 h-16 object-cover rounded"
                  src={`${IMAGE_URL}/${product?.image}`}
                  alt={product.name}
                />
              </td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.type}</td>
              <td className="py-2 px-4 border-b font-bold">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
