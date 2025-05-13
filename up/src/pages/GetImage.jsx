import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const GetImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axiosInstance.get("/get-image");
        console.log("Response:", res.data); // for debugging
        if (res.data.success) {
          setImages(res.data.data); // ✅ use 'data' instead of 'images'
        } else {
          console.error("No images found:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Uploaded Images</h1>

      <div className="flex flex-wrap gap-6 justify-center w-full">
        {Array.isArray(images) && images.length > 0 ? (
          images.map((img, idx) => (
            <div
              key={img._id || idx}
              className="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col items-center"
            >
              <img
                src={`http://localhost:3030/uploads/${img.photo}`}
                alt={`uploaded-${idx}`}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <p className="text-sm text-gray-600">{img.photo}</p>
              <p className="text-xs text-gray-400">{new Date(img.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No images found.</p>
        )}
      </div>
    </div>
  );
};

export default GetImage;
