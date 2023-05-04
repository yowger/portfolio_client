import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://portfolio-server-mjm2.onrender.com",
    }),
    endpoints: () => ({}),
})
