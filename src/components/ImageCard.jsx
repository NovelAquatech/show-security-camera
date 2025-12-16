const ImageCard = ({name, mac, snapShot, trigger, imageSize, time, imageLink}) => {
  return (
    <div className="min-w-[280px] w-full max-w-sm cursor-pointer rounded-2xl bg-white p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white">
      <a href={imageLink}>
        <img
          className="rounded md:rounded-lg w-100 h-50"
          src={imageLink}
          alt=""
        />
      </a>
      <div className="p-6 text-surface dark:text-white">
        <ul className="list-none">
          <li>
            <span className="text-sky-800 font-semibold mr-2">Device Name</span>
            :<span className="ml-2">{name}</span>
          </li>
          <li>
            <span className="text-sky-800 font-semibold mr-2">Device MAC</span>:
            <span className="ml-2">{mac}</span>
          </li>
          <li>
            <span className="text-sky-800 font-semibold mr-2">Snapshot Type</span>
            :<span className="ml-2">{snapShot}</span>
          </li>
          <li>
            <span className="text-sky-800 font-semibold mr-2">
              Trigger Value
            </span>
            :<span className="ml-2">{trigger}</span>
          </li>
          <li>
            <span className="text-sky-800 font-semibold mr-2">Image Size</span>
            :<span className="ml-2">{imageSize} bytes</span>
          </li>
          <li>
            <span className="text-sky-800 font-semibold mr-2">
              Timestamp
            </span>
            :<span className="ml-2">{time}</span>
          </li>
          <li>
            <span className="text-sky-800 font-semibold mr-2">
             Image Link
            </span>
            :<span className="ml-2"><a href={imageLink}  alt="" target="_blank" className="text-sky-500">View Image</a></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageCard
