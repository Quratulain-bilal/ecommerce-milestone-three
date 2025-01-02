"use client";

import Image from "next/image";
import { ItemProps } from "../../type";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductsData = ({ item }: ItemProps) => {
  const dispatch = useDispatch();
  const startArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));

  return (
    <div className="w-full overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 bg-white border border-gray-200">
      <Link href={{ pathname: "/product", query: { _id: item?._id } }}>
        <div className="w-full h-64 group overflow-hidden relative">
          <Image
            src={item?.image}
            alt="product image"
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {item?.isNew && (
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-green-500 text-white">
              New Arrival
            </span>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-y-2">
        <p className="font-semibold text-lg text-gray-800">{item?.title}</p>
        <div className="flex items-center justify-between">
          <div className="bg-black text-white py-1 px-3 rounded-full text-xs font-semibold">
            <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-gray-400 line-through text-sm">
              <FormattedPrice amount={item?.oldPrice} />
            </p>
            <p className="font-semibold text-xl text-black">
              <FormattedPrice amount={item?.price} />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* Add to cart button */}
          <button
            onClick={() =>
              dispatch(addToCart(item)) &&
              toast.success(
                `${item?.title.substring(0, 15)} added successfully!`
              )
            }
            className="bg-black px-4 py-2 text-sm tracking-wide rounded text-white transition duration-200 hover:bg-gray-800 transform hover:scale-105"
          >
            Add to Cart
          </button>
          {/* Star icons */}
          <div className="flex items-center gap-x-1">{startArray}</div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductsData;
