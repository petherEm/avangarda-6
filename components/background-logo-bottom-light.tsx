import React from "react";
import Image from "next/image";

const BackgroundBottomLight = () => {
  return (
    <>
      {/* Background with Logo Pattern */}
      <div className="absolute inset-0">
        {/* Horizontal gradient line adjusted to almost touch the logo - Hidden on mobile */}
        <div className="absolute inset-0">
          <div
            className="hidden sm:block absolute bottom-[3.5rem] right-[40%] w-[35%] h-[3px] opacity-40"
            style={{
              background:
                "linear-gradient(to left, transparent 0%, #E31C79 30%, #E31C79 90%, transparent 100%)",
            }}
          ></div>
        </div>

        {/* Single Logo in Bottom Left */}
        <div className="absolute inset-0">
          {/* Single bottom left logo - Moved further down */}
          <div className="absolute bottom-0 left-4 sm:bottom-2 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 opacity-90">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundBottomLight;
