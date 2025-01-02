import { useGetCourseDetailWithStatusQuery } from '@/features/api/purchaseApi';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

export const PurchaseCourseProtectedRoute = ({children}) => {
    const {courseId} = useParams();
    const {data, isLoading} = useGetCourseDetailWithStatusQuery(courseId);
    console.log(data);
    

    if(isLoading) return <p>Loading...</p>

    return data?.purchased ? children : <Navigate to={`/course-detail/${courseId}`}/>

}
