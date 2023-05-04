import { apiSlice } from "../../../app/api/apiSlice"

export const mailApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendMail: builder.mutation({
            query: ({ clientName, clientMail, clientMessage }) => ({
                url: `/mail`,
                method: "POST",
                body: { clientName, clientMail, clientMessage },
            }),
        }),
    }),
})

export const { useSendMailMutation } = mailApiSlice
