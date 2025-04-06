import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const HomeCorousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const childWidth = scrollRef.current.firstChild.firstChild.offsetWidth + 16; // card width + gap
      scrollRef.current.scrollBy({ left: -childWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const childWidth = scrollRef.current.firstChild.firstChild.offsetWidth + 16;
      scrollRef.current.scrollBy({ left: childWidth, behavior: "smooth" });
    }
  };

  const HomeCorousel = [
    {
      id: 1,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/CC/PC_CC_379X304._SY304_CB546861540_.jpg",
      title: "Bluetooth Calling Smartwatch starts at ₹999",
    },
    {
      id: 2,
      cover:
        "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/PatriotMemory._CB547894735_.png",
      title: "Bestselling headphones starts at ₹199",
    },
    {
      id: 3,
      cover:
        "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/PANSEBA._CB546742684_.png",
      title: "Starting ₹99 | Air-purifying plants",
    },
    {
      id: 4,
      cover:
        "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/LANEIGE._CB546742684_.png",
      title: "Up to 60% off | Car, bike parts & accessories",
    },
    {
      id: 5,
      cover:
        "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/TrungNguyen._CB547894735_.png",
      title: "Up to 60% off | Start your fitness journey",
    },
    {
      id: 6,
      cover:
        "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/CINCOM._CB546742684_.png",
      title: "Up to 50% off | International brands",
    },
    {
      id: 7,
      cover:
        "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/TrungNguyen._CB547894735_.png",
      title: "Under ₹699 | Combo packs | Amazon brands",
    },
    {
      id: 8,
      cover:
        "https://m.media-amazon.com/images/G/31/img19/OOC/Gateway/2025/Jimmy._CB546742684_.png",
      title: "Season 2 streaming now | Only on miniTV",
    },
  ];

  return (


    <div className="flex flex-col gap-4 p-6 bg-gray-100 relative top-[750px]">
      <div className="bg-white w-full rounded-md shadow p-4 relative">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-gray-800">
            Min. 50% off | Unique home finds | Amazon Brands & more
          </p>
          <Link to="/products" className="text-blue-600 text-sm hover:underline">
            See all
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <div
            ref={scrollRef}
            className="whitespace-nowrap overflow-hidden"
          >
            <div className="flex gap-4">
              {HomeCorousel.map((item) => (
                <div key={item.id} className="min-w-[200px] max-w-[200px]">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="h-[200px] w-full object-contain rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

