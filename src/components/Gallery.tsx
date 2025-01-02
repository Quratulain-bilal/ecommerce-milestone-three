import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          {/* Trending Products Section */}
          <div className="flex flex-col items-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4 text-center">
              Trending Products
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center mb-4">
              Explore our collection of trending products that are making waves
              in the fashion world. From stylish apparel to must-have
              accessories, our curated selection is designed to keep you ahead
              of the trends. Discover the latest styles and elevate your
              wardrobe with our top picks!
            </p>
       
          </div>

          {/* Image Gallery */}
          <div className=" bg-black grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {/* Full-length images on the left and right */}
            <div className="relative col-span-1">
              <img
                alt="gallery"
                className="w-full h-96 object-cover object-center block transition-transform duration-300 transform hover:scale-105"
                src="https://img.freepik.com/premium-photo/two-beautiful-stylish-womans-posing-near-gray-wall-street_109529-1451.jpg?w=900"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 col-span-1">
              <div className="relative group">
                <img
                  alt="gallery"
                  className="w-full h-64 object-cover object-center block transition-transform duration-300 transform group-hover:scale-105"
                  src="https://img.freepik.com/free-photo/medium-shot-friends-posing-outdoors_23-2149870217.jpg?t=st=1735799339~exp=1735802939~hmac=871ce8bab4d97b59a50195ceffccb83310576ee5108ec973db282958d1555f6e&w=900"
                />
              </div>
              <div className="relative group">
                <img
                  alt="gallery"
                  className="w-full h-64 object-cover object-center block transition-transform duration-300 transform group-hover:scale-105"
                  src="https://img.freepik.com/free-photo/couple-winter-cloths-studio_1303-5887.jpg?t=st=1735799266~exp=1735802866~hmac=6c2ee2619a8c309907471a3a0737c0e8dd0328e5aaf3ee4a765c76df225ff431&w=900"
                />
              </div>
            </div>
            <div className="relative col-span-1">
              <img
                alt="gallery"
                className="w-full h-96 object-cover object-center block transition-transform duration-300 transform hover:scale-105"
                src="https://img.freepik.com/free-photo/glamorous-girl-white-scarf-looking-boyfriend-with-love-indoor-portrait-handsome-european-man-spending-leisure-time-with-cute-girlfriend_197531-8352.jpg?t=st=1735798958~exp=1735802558~hmac=2b13c7d311926d08cd183b77aa16675007295664295d6820e2c9cfcdba5a872c&w=900"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
