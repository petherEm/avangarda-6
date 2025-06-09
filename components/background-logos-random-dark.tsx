import React from "react";
import Image from "next/image";

const BackgroundLogosDark = () => {
  return (
    <>
      {/* Background with Logo Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#404042] via-[#2a2a2c] to-[#1a1a1c]">
        {/* Logo Pattern Overlay - Bottom Right Only */}
        <div className="absolute inset-0 opacity-40">
          {/* Bottom right positioned logos */}
          <div className="absolute top-[55%] right-[15%] w-16 h-16 opacity-75">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[70%] right-[25%] w-12 h-12 opacity-80 rotate-12">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[65%] right-[8%] w-10 h-10 opacity-85 -rotate-15">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[80%] right-[18%] w-14 h-14 opacity-70 rotate-30">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[85%] right-[35%] w-8 h-8 opacity-90 -rotate-25">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[75%] right-[5%] w-11 h-11 opacity-65 rotate-45">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[60%] right-[30%] w-9 h-9 opacity-75 -rotate-10">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute top-[90%] right-[12%] w-13 h-13 opacity-80 rotate-20">
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Reduced Gradient Accent Shapes - Less Blur */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#E31C79]/12 to-[#E31C79]/3 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-[#E31C79]/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#E31C79]/6 to-transparent rounded-full blur-2xl"></div>
      </div>
    </>
  );
};

export default BackgroundLogosDark;
