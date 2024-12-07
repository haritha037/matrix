import { Mosaic } from "react-loading-indicators";

function LoadingIndicator() {
  return (
    <div className=" h-full flex items-center justify-center z-20 ">
      <Mosaic color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
}

export default LoadingIndicator;
