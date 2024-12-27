import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useCreateCheckoutSessionMutation } from "@/features/api/purchaseApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const BuyCourseButton = ({courseId}) => {
  const navigate = useNavigate();
  const [
    createCheckoutSession,
    { data, isLoading, isSuccess, isError, error },
  ] = useCreateCheckoutSessionMutation();

  const purchaseCourseHandler = async () => {
    await createCheckoutSession(courseId);
  };

  useEffect(()=>{
    if(isSuccess){
       if(data?.url){
        window.location.href = data.url; // Redirect to stripe checkout url
       }else{
        toast.error("Invalid response from server.")
       }
    } 
    if(isError){
      toast.error(error?.data?.message || "Failed to create checkout session")
    }
  },[data, isSuccess, isError, error])

  return (
    <div>
      <Button
        disabled={isLoading}
        onClick={() => navigate(`/payment/${courseId}`)}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          "Purchase Course"
        )}
      </Button>
    </div>
  );
};
