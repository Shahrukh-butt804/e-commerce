import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/constants/constant";
export const productApiSlice = createApi({
  reducerPath: "productApi", 
  baseQuery: fetchBaseQuery({ baseUrl : `${BASE_URL}/product` ,}), 
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/getall",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetAllProductsQuery } = productApiSlice;
