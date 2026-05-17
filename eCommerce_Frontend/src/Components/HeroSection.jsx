import React from "react";

const HeroSection = ({
  label = "# New Arrival",
  heading = "Shoes Collection",
  description = "Discover a world of stylish, comfortable, and high-quality footwear for every step you take. Whether you’re looking for casual kicks, elegant heels, or everyday essentials, we’ve got something just for you. Happy shopping!",
  buttonText = "Discover Now",
  buttonLink = "#",
  imageSrc = "./images/bg_1.png",
  bgColor = "bg-amber-300",
}) => {
  return (
    <section
      className={`flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-10 ${bgColor}`}
    >
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-4 text-center lg:text-left mt-20">
        <span className="bg-black text-white text-xs px-3 py-1 inline-block uppercase tracking-widest">
          {label}
        </span>
        <h2 className="text-4xl font-semibold leading-tight">{heading}</h2>
        <p className="text-md text-gray-800">{description}</p>
        <a href={buttonLink}>
          <button className="bg-yellow-700 text-white font-medium px-5 py-2 mt-4 hover:bg-yellow-800">
            {buttonText}
          </button>
        </a>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 mt-20">
        <img src={imageSrc} alt="Hero" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
