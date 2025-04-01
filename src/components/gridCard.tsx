import React from "react";

export default function ProductTable() {
  const plants = [
    {
      name: "Peace Lily",
      type: "Indoor",
      price: "$36.00",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
    {
      name: "Monstera",
      type: "Outdoor",
      price: "$45.00",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
    },
    {
      name: "Oak Tree",
      type: "Outdoor",
      price: "$68.50",
      imgSrc:
        "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
    },
  ];

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
          {plants.map((plant, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border-b">
                <img className="w-16 h-16 object-cover rounded" src={plant.imgSrc} alt={plant.name} />
              </td>
              <td className="py-2 px-4 border-b">{plant.name}</td>
              <td className="py-2 px-4 border-b">{plant.type}</td>
              <td className="py-2 px-4 border-b font-bold">{plant.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
