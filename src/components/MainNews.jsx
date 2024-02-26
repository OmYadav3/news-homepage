import React from "react";
import HomeImage from "/home-image.jpg";

const MainNews = () => {
  return (
    <div className="section w-[60%] flex flex-col ml-40 ">
      <div className="sec-A ">
        <img src={HomeImage} alt="not found" />
      </div>
      <div className="sec-B my-6 flex ">
        <div className="main-heading text-5xl font-bold p-4">
          The Bright Future of Web 3.0?
        </div>
        <div className="main-heading-details ">
          <div className="details text-lg h-[60%] p-2 ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </div>
          <div className="details p-3">
            <button className="readmore py-4 px-6 text-xs  bg-red-500 hover:bg-black text-white font-normal">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
