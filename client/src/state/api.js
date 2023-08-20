import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",  //Name of the slice
    tagTypes: [
        "User",   
    ], //Represent the values of links

    endpoints: (build) => ({
        /*THIS IS WHERE WE MAKE OUR API CALLS */
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        })
    })
})

export const {
    useGetUserQuery,
} = api