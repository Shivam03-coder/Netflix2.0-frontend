import { API_END_POINT } from "../../../utils/const";
import { apiSlice } from "../../redux_middleware/Api_middleware";

const UserapiquerySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${API_END_POINT}/login`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${API_END_POINT}/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${API_END_POINT}/register`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  UserapiquerySlice;
