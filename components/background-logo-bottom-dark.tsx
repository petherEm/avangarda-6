import Image from "next/image";

interface BackgroundLogoBottomDarkProps {
  position?: "left" | "right";
}

const BackgroundLogoBottomDark = ({
  position = "right",
}: BackgroundLogoBottomDarkProps) => {
  const isLeft = position === "left";

  return (
    <>
      {/* Background with Logo Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a5a5c] via-[#4a4a4c] to-[#3a3a3c]">
        {/* Horizontal gradient line from mid-width to logo level - Hidden on mobile */}
        <div className="absolute inset-0">
          <div
            className={`hidden sm:block absolute bottom-[2rem] sm:bottom-[3rem] w-[45%] h-[3px] opacity-30 ${
              isLeft ? "left-0" : "right-0"
            }`}
            style={{
              background: isLeft
                ? "linear-gradient(to right, transparent 0%, #E31C79 30%, #E31C79 70%, transparent 100%)"
                : "linear-gradient(to left, transparent 0%, #E31C79 30%, #E31C79 70%, transparent 100%)",
            }}
          ></div>
        </div>

        {/* Single Logo positioned based on props */}
        <div className="absolute inset-0">
          <div
            className={`absolute bottom-4 w-16 h-16 sm:bottom-10 sm:w-20 sm:h-20 opacity-70 ${
              isLeft ? "left-4 sm:left-10" : "right-4 sm:right-10"
            }`}
          >
            <Image
              src="/avangarda-logo-sm-2.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Gradient Accent Shapes - Lightened */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#E31C79]/8 to-[#E31C79]/2 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-[#E31C79]/6 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#E31C79]/4 to-transparent rounded-full blur-2xl"></div>
      </div>
    </>
  );
};

export default BackgroundLogoBottomDark;
