import { useState, useEffect } from "react";

export function fetchCameraData(org, startDate, endDate) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_GET_CAMERA_URL;

  useEffect(() => {
    if (!startDate || !endDate) return;
    async function fetchData() {      
      setLoading(true);
      const from = new Date(startDate).toISOString().split("T")[0];
      const to = new Date(endDate).toISOString().split("T")[0];

      const url = `${baseUrl}/api/getCameraImages?orgName=${org}&from=${from}&to=${to}`;

      try {
        const imageRes = await fetch(url);
        if (!imageRes.ok) {
          throw new Error("Failed to fetch camera images");
        }
        const imageData = await imageRes.json();
        setImages(imageData.images);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [org, startDate, endDate]);

  return { images, loading };
}
