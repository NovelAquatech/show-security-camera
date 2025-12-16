import ImageComponent from "../components/ImageComponent";
import { fetchCameraData } from "../utils/fetchData";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

export default function Home() {
  const today = new Date();
  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(today.getDate() - 7);



  const [value, setValue] = useState({
    startDate: oneWeekAgo,
    endDate: today,
  });

  const urlParams = new URLSearchParams(window.location.search);
  const org = urlParams.get("org") || "camera-test";
  const { images, loading } = fetchCameraData(
    org,
    value.startDate,
    value.endDate
  );

  return (
    <div className="flex flex-col justify-center bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 text-center my-6">
        Camera Images for {org}
      </h1>
      <div className="right-12 w-64 absolute top-10">
        <Datepicker
          inputClassName="w-full h-10 p-4 rounded-md focus:ring-0 font-normal placeholder:text-gray-700 text-blue text-sm border border-gray-300 focus:border-blue-500 shadow-sm"
          primaryColor="blue"
          separator="to"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
      <div className="flex justify-center items-start relative">
        {!value.startDate || !value.endDate ? (
          <p className="text-gray-500 text-lg">
            Please select a date range to view images.
          </p>
        ) : (
          <ImageComponent images={images} loading={loading} />
        )}
      </div>
    </div>
  );
}
