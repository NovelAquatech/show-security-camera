import ImageCard from "./ImageCard";
import { getTimeAgo } from "../utils/getTime";

function ImageComponent({images, loading}) {
 
 const sortedImages = images.sort(
   (a, b) => new Date(b.ts) - new Date(a.ts)
 );
  return (
    <div>

      <div className="flex justify-center flex-wrap gap-8 p-6">
        
        {!loading && sortedImages.length === 0 && (
          <p className="text-gray-500">No images found for the selected date range.</p>
        )}
        {loading && (
          <p className="text-gray-500">Loading images...</p>
        )}
        {sortedImages.map((im, idx) => (
          
          <ImageCard
            key={idx}
            name={im.name || im.values_devName || ""}
            mac={im.mac || im.values_devMac || ""}
            snapShot={im.values_snapType || ""}
            trigger={im.trigger || ""}
            imageSize={im.values_imageSize || ""}
            time={getTimeAgo(im.ts) || ""}
            imageLink={im.values_image || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageComponent;
