import React, { useEffect } from "react";
import { Course } from "./Course";
import { useLoadUserQuery } from "@/features/api/authApi";

export const MyLearning = () => {
  const {data, isLoading,isSuccess,refetch} = useLoadUserQuery();
  
  useEffect(()=> {
    refetch();
  },[isSuccess])

  const myLearning = data?.user.enrolledCourse || [];
  console.log({myLearning});
  return (
    <div className="max-w-4xl mx-auto my-20 px-4 md:px-0">
      <h1 className="font-bold text-2xl">MY LEARNING</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearning.length === 0 ? (
          <p>You are not enrolled in any course.</p>
        ) : (
          // <Course/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {myLearning.map((course, index) => (
              <Course key={index} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {[1, 2, 3].map((_, index) => (
      <div
        key={index}
        className="animate-pulse border border-gray-300 rounded-lg p-4 space-y-3"
      >
        {/* Thumbnail Skeleton */}
        <div className="h-32 bg-gray-300 rounded"></div>

        {/* Text Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {[...Array(3)].map((_, index) => (
    <div
      key={index}
      className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
    ></div>
  ))}
</div>;
