import React from "react";
import { Link } from "react-router-dom";

export const HomeProductList = () => {
  const HomeProductList = [
    {
      id: 1,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg",
      title: "Bluetooth Calling Smartwatch starts at ₹999",
    },
    {
      id: 2,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img21/CE/HP2/Boat_Pc_CC_1x._SY304_CB596084660_.jpg",
      title: "Bestselling headphones starts at ₹199",
    },
    {
      id: 3,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img18/Lawn_Garden/Ud/MSO_May/compressed_379x304_compressed._SY304_CB592193370_.jpg",
      title: "Starting ₹99 | Air-purifying plants",
    },
    {
      id: 4,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg",
      title: "Up to 60% off | Car, bike parts & accessories",
    },
    {
      id: 5,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
      title: "Up to 60% off | Start your fitness journey",
    },
    {
      id: 6,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img19/OOC/Gateway/Remarkable/379x304._SY304_CB583941057_.jpg",
      title: "Up to 50% off | International brands",
    },
    {
      id: 7,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/Symbol/2024/GW_Jan/29th/Combo_low_res_2_1_1._SY304_CB583301264_.jpg",
      title: "Under ₹699 | Combo packs | Amazon brands",
    },
    {
      id: 8,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img17/Home/AmazonTV/Dehati_Ladke/PC_CC/DeskCC-379x304._SY304_CB584616146_.jpg",
      title: "Season 2 streaming now | Only on miniTV",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 absolute top-[350px] gap-10 pl-10 phone-sm:grid-cols-4 phone-sm:top-32 phone-sm:pl-1 phone-md:pl-2 phone-lg:pl-3 phone-xl:pl-4 phone-sm:gap-2 lapi:grid-cols-4 lapi:top-[350px] lapi:gap-20">
        {HomeProductList.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center shadow-lg bg-white gap-2 p-4 phone-sm:h-20 phone-sm:w-20 phone-sm:p-1 phone-sm:gap-0 lapi:h-80 lapi:w-72 lapi:p-4 lapi:gap-12"
            >
              <p className="text-black font-semibold text-lg phone-sm:h-4 phone-sm:mb-2 phone-sm:w-full phone-sm:text-[5px] lapi:text-lg">
                {item.title}
              </p>
              <img
                src={item.cover}
                alt={item.title}
                className="phone-sm:h-10 lapi:h-44 object-fit" 
              />
              <Link to="/products"> 
                <p className=" text-teal-500 phone-sm:text-[4px] phone-sm:mt-1 lapi:text-[20px] lapi:mt-0">
                  See more
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
