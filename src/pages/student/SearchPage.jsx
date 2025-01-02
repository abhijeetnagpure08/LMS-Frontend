// import React, { useState } from 'react'
// import { Filter } from './Filter'
// import { SearchResult } from './SearchResult';
// import { Link, useSearchParams } from 'react-router-dom';
// import { useGetSearchCourseQuery } from '@/features/api/courseApi';
// import { Skeleton } from '@/components/ui/skeleton';
// import { AlertCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export const SearchPage = () => {
//     const [searchParams] = useSearchParams();
//     const query = searchParams.get("query");
//     const [selectedCategories, setSelectedCatgories] = useState([]);
//     const [sortByPrice, setSortByPrice] = useState("");
  
//     const { data, isLoading } = useGetSearchCourseQuery({
//       searchQuery:query,
//       categories:selectedCategories,
//       sortByPrice
//     });
    
//     const isEmpty = !isLoading && data?.courses.length === 0 ;

//     const handleFilterChange = (categories, price) => {
//         setSelectedCatgories(categories);
//         setSortByPrice(price);
//       }
//   return (
//     <div className='w-10/12 mx-auto p-4 mt-14 md:p-8'>
//         <div className="my-6">
//             <h1>result for "{query}"</h1>
//             <p>Showing results for {" "}</p>
//             <span className='text-blue-800 font-bold italic'>{query}</span>
//         </div>
//         <div className='flex flex-col md:flex-row gap-10'>
//             <Filter handleFilterChange={handleFilterChange}/>
//             <div className="flex-1">
//                 {
//                     isLoading ? (
//                         Array.from({length:3}).map((_,idx)=> (
//                             <CourseSkeleton key={idx} />
//                         ))
//                     ) : isEmpty ? (<CourseNotFound/>) : (
//                         data?.courses?.map((course)=> <SearchResult key={course._id} course={course} />)
//                     )
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// const CourseNotFound = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-32 dark:bg-gray-900 p-6">
//         <AlertCircle className="text-red-500 h-16 w-16 mb-4" />
//         <h1 className="font-bold text-2xl md:text-4xl text-gray-800 dark:text-gray-200 mb-2">
//           Course Not Found
//         </h1>
//         <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
//           Sorry, we couldn't find the course you're looking for.
//         </p>
//         <Link to="/" className="italic">
//           <Button variant="link">Browse All Courses</Button>
//         </Link>
//       </div>
//     );
//   };
  
//   const CourseSkeleton = () => {
//     return (
//       <div className="flex-1 flex flex-col md:flex-row justify-between border-b border-gray-300 py-4">
//         <div className="h-32 w-full md:w-64">
//           <Skeleton className="h-full w-full object-cover" />
//         </div>
  
//         <div className="flex flex-col gap-2 flex-1 px-4">
//           <Skeleton className="h-6 w-3/4" />
//           <Skeleton className="h-4 w-1/2" />
//           <div className="flex items-center gap-2">
//             <Skeleton className="h-4 w-1/3" />
//           </div>
//           <Skeleton className="h-6 w-20 mt-2" />
//         </div>
  
//         <div className="flex flex-col items-end justify-between mt-4 md:mt-0">
//           <Skeleton className="h-6 w-12" />
//         </div>
//       </div>
//     );
//   };

import React, { useState } from "react";
import { Filter } from "./Filter";
import { SearchResult } from "./SearchResult";
import { Link, useSearchParams } from "react-router-dom";
import { useGetSearchCourseQuery } from "@/features/api/courseApi";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [selectedCategories, setSelectedCatgories] = useState([]);
  const [sortByPrice, setSortByPrice] = useState("");

  const { data, isLoading } = useGetSearchCourseQuery({
    searchQuery: query,
    categories: selectedCategories,
    sortByPrice,
  });

  const isEmpty = !isLoading && data?.courses.length === 0;

  const handleFilterChange = (categories, price) => {
    setSelectedCatgories(categories);
    setSortByPrice(price);
  };

  return (
    <div className="w-11/12 mx-auto p-4 mt-14 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="my-6">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
          Results for "{query}"
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Showing results for{" "}
          <span className="text-blue-600 font-bold italic">{query}</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <Filter handleFilterChange={handleFilterChange} />
        <div className="flex-1">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, idx) => <CourseSkeleton key={idx} />)
          ) : isEmpty ? (
            <CourseNotFound />
          ) : (
            data?.courses?.map((course) => (
              <SearchResult key={course._id} course={course} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const CourseNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-32 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <AlertCircle className="text-red-500 h-16 w-16 mb-4" />
      <h1 className="font-extrabold text-3xl md:text-4xl text-gray-800 dark:text-white mb-2">
        Course Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
        Sorry, we couldn't find the course you're looking for.
      </p>
      <Link to="/" className="italic">
        <Button variant="link" className="text-blue-600 hover:underline">
          Browse All Courses
        </Button>
      </Link>
    </div>
  );
};

const CourseSkeleton = () => {
  return (
    <div className="flex-1 flex flex-col md:flex-row justify-between border-b border-gray-300 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-200">
      <div className="h-32 w-full md:w-64 rounded-md overflow-hidden">
        <Skeleton className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-4 flex-1 px-6">
        <Skeleton className="h-8 w-3/4 rounded-md bg-gray-300 dark:bg-gray-700" />
        <Skeleton className="h-5 w-1/2 rounded-md bg-gray-300 dark:bg-gray-700" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-5 w-1/3 rounded-md bg-gray-300 dark:bg-gray-700" />
        </div>
        <Skeleton className="h-8 w-24 mt-4 rounded-md bg-gray-300 dark:bg-gray-700" />
      </div>

      <div className="flex flex-col items-end justify-between mt-4 md:mt-0">
        <Skeleton className="h-8 w-12 rounded-md bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  );
};
