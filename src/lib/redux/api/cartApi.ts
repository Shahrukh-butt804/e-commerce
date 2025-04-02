import { BASE_URL } from "@/constants/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/cart` }),
  endpoints: (builder) => ({
    getMyCart: builder.query({
      query: () => "/get-my-cart",
    }),

    addToCart: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: "/add-to-cart",
        method: "POST",
        body: { productId, quantity }, // Send data in the request body
      }),
    }),
    deleteToCart: builder.mutation({
      query: ({ productId }) => ({
        url: "/delete-to-cart",
        method: "POST",
        body: { productId }, // Send data in the request body
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetMyCartQuery, useAddToCartMutation ,useDeleteToCartMutation} = cartApiSlice;
