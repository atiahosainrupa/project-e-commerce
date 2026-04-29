import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi ({
baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
}),
endpoints: (build) => ({
    getProducts: build.query({
        query: ({ category, limit, skip}) => 
            `/products${category ? `/category/${category}` : "" }?limit=${limit}&skip=${skip}`,
    }),
    getCategoryList: build.query({
        query: ()=> "/products/category-list",
    }),
    getProductDetails: build.query({
        query: (id) => `/products/${id}`,
    }),
    login: build.mutation({
        query: (data) => ({
            url: `/auth/login`,
            method: 'POST',
            body: data,
        }),
    }),
}),
}); 

export const { useGetProductsQuery, useGetCategoryListQuery, useGetProductDetailsQuery, useLoginMutation } = apiService;
