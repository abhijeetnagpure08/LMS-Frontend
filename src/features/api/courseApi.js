import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COURSE_API = "http://localhost:8080/api/v1/course";

export const courseApi = createApi({
  reducerPath: "courseApi",
  tagTypes: ["REFETCH_CREATOR_COURSE"],
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: ({ courseTitle, category }) => ({
        url: "",
        method: "POST",
        body: { courseTitle, category },
      }),
      invalidatesTags: ["REFETCH_CREATOR_COURSE"],
    }),
    getCreatorCourse: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["REFETCH_CREATOR_COURSE"],
    }),
    editCourse: builder.mutation({
      query: ({ formData, courseId }) => ({
        url: `/${courseId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["REFETCH_CREATOR_COURSE"],
    }),
    getCourseById: builder.query({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "GET",
      }),
      providesTags: ["REFETCH_CREATOR_COURSE"],
    }),
    createLecture: builder.mutation({
      query: ({lectureTitle,courseId}) => ({
        url: `/${courseId}/lecture`,
        method: "POST",
        body: {lectureTitle},
      }),
    })
  }),
});

export const { useCreateCourseMutation, useGetCreatorCourseQuery,useEditCourseMutation, useGetCourseByIdQuery,useCreateLectureMutation } = courseApi;
