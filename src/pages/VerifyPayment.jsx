import { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../App";
import { PulseLoader } from "react-spinners";
import { ProductContext } from "../Context/ProductContext";
import { toast } from "react-toastify";
import { FaRegCircleCheck } from "react-icons/fa6";

const VerifyPayment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isVerified, setIsVerified] = useState(false);
  const [reciptData, setReciptData] = useState(null);

  const { token } = useContext(ProductContext);
  const transaction_id = searchParams.get("transaction_id");

  const HandleVerifyPayment = async () => {
    try {
      const res = await fetch(
        `${baseUrl}verify-payment?transaction_id=${transaction_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setIsVerified(true);
        setReciptData(data.data);

        // Redirect to thank you page after 2 sec
        setTimeout(() => {
          navigate("/thankyoupaymentpage", { state: data.data });
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  useEffect(() => {
    if (transaction_id) {
      HandleVerifyPayment();
    }
  }, [transaction_id]);

  return (
    <div className="relative min-h-screen">
      {!isVerified && (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-20 bg-white text-black gap-3">
          <p className="text-2xl font-semibold">Verifying Payment...</p>
          <PulseLoader />
        </div>
      )}

      {isVerified && (
        <div className="flex flex-col items-center mt-20">
          <p className="text-3xl font-bold text-green-600">Payment SUCCESSFUL</p>
          <FaRegCircleCheck className="text-green-600 text-6xl mt-4" />
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
