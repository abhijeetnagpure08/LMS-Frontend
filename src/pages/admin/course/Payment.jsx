import { useGetCourseByIdQuery } from "@/features/api/courseApi";
import { useCreateCoursePurchaseMutation } from "@/features/api/purchaseApi";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export const Payment = () => {
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("Select Country");
    const [formData, setFormData] = useState({
      email: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      name: "",
      zip: "",
    });
  
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  
    const changeText = (country) => {
      setSelectedCountry(country);
      setDropdownVisible(false);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  const params = useParams();
  const courseId = params.courseId
  const {
    data: courseByIdData,
    isLoading: courseByIdLoading,
    isSuccess: courseByIdSuccess,
    refetch,
  } = useGetCourseByIdQuery(courseId);
  console.log(courseByIdData?.course);

  const [createCoursePurchase,{data , isLoading, isError,isSuccess}] = useCreateCoursePurchaseMutation();

  const payHandler = async () => {
    await createCoursePurchase(courseId);
  }

  useEffect(()=> {
    if(isSuccess){
        refetch();
        navigate(`/course-detail/${courseId}`)
        toast.success("Course Purchase successfully")
    }
  },[isSuccess, courseByIdData])

  return (
    <div>
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full mt-14">
            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">
                  {courseByIdData?.course.courseTitle}
                </p>
                <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">
                  Rs {courseByIdData?.course.coursePrice}
                </p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img
                  src={courseByIdData?.course.courseThumbnail}
                  alt="headphones"
                />
              </div>
            </div>

            {/* <div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
              <button className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                <div>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base leading-4">Pay</p>
                </div>
              </button>

              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                  or pay with card
                </p>
                <hr className="border w-full" />
              </div>

              <div className="mt-8">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                Card details
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="0000 1234 6549 15151"
                  />
                </div>
                <div className="flex-row flex">
                  <input
                    className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="MM/YY"
                  />
                  <input
                    className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                Name on card
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Name on card"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
                Country or region
              </label>
              <div className="mt-2 flex-col">
                <div className="relative">
                  <button
                    id="changetext"
                    className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                    onClick={toggleDropdown}
                  >
                    {selectedCountry}
                  </button>
                  <svg
                    onClick={toggleDropdown}
                    id="closeIcon"
                    className={`cursor-pointer absolute top-4 right-4 ${
                      dropdownVisible ? "hidden" : ""
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    onClick={toggleDropdown}
                    id="openIcon"
                    className={`cursor-pointer absolute top-4 right-4 ${
                      dropdownVisible ? "" : "hidden"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {dropdownVisible && (
                    <div
                      id="dropdown"
                      className="mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600"
                    >
                      <div
                        onClick={() => changeText("China")}
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                      >
                        China
                      </div>
                      <div
                        onClick={() => changeText("Russia")}
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                      >
                        Russia
                      </div>
                      <div
                        onClick={() => changeText("UK")}
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                      >
                        UK
                      </div>
                    </div>
                  )}
                </div>
                <input
                  className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="ZIP"
                />
              </div>

              <button onClick={payHandler} className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                Pay
              </button>
            </div> */}

<div className="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
      <button
        className="border border-transparent hover:border-gray-300 bg-gray-900 dark:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:text-gray-900 dark:hover:text-white hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full"
        onClick={payHandler}
      >
        <div>
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG Paths */}
          </svg>
        </div>
        <div>
          <p className="text-base leading-4">Pay</p>
        </div>
      </button>

      <div className="flex flex-row justify-center items-center mt-6">
        <hr className="border w-full" />
        <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
          or pay with card
        </p>
        <hr className="border w-full" />
      </div>

      {/* Email Input */}
      <div className="mt-8">
        <input
          className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      {/* Card Details */}
      <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
        Card details
      </label>
      <div className="mt-2 flex-col">
        <input
          className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
          type="text"
          name="cardNumber"
          placeholder="0000 1234 6549 15151"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />
        <div className="flex-row flex">
          <input
            className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={formData.expiry}
            onChange={handleInputChange}
          />
          <input
            className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name="cvc"
            placeholder="CVC"
            value={formData.cvc}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Name Input */}
      <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
        Name on card
      </label>
      <input
        className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
        type="text"
        name="name"
        placeholder="Name on card"
        value={formData.name}
        onChange={handleInputChange}
      />

      {/* Country Dropdown */}
      <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
        Country or region
      </label>
      <div className="mt-2 flex-col relative">
        <button
          id="changetext"
          className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
          onClick={toggleDropdown}
        >
          {selectedCountry}
        </button>
        {dropdownVisible && (
          <div
            id="dropdown"
            className="mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600"
          >
            <div
              onClick={() => changeText("China")}
              className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
            >
              China
            </div>
            <div
              onClick={() => changeText("Russia")}
              className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
            >
              Russia
            </div>
            <div
              onClick={() => changeText("UK")}
              className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
            >
              UK
            </div>
          </div>
        )}
        <input
          className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-2"
          type="text"
          name="zip"
          placeholder="ZIP"
          value={formData.zip}
          onChange={handleInputChange}
        />
      </div>

      <button
        onClick={payHandler}
        className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
      >
        Pay
      </button>
    </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};
