"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import { BsBookmarks } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { productData, orderData } = useSelector(
    (state: StateProps) => state.shopping
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  useEffect(() => {
    let amt = 0;
    productData.forEach((item: Products) => {
      amt += item.price * item.quantity;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <div className="bg-white shadow-md h-20 sticky top-0 z-50">
      <Container className="h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo />
          <h1 className="text-2xl font-bold text-gray-800 ml-2">Annabrand</h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Field */}
          <div className="flex items-center bg-gray-100 rounded-full border border-gray-300 px-4 py-1.5">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products"
              className="placeholder:text-sm flex-1 outline-none bg-transparent px-2"
            />
          </div>
          {!session && (
            <div
              onClick={() => signIn()}
              className="flex items-center cursor-pointer text-gray-800"
            >
              <AiOutlineUser className="text-2xl" />
              <p className="text-sm font-semibold ml-1">Login/Register</p>
            </div>
          )}
          <Link href={"/cart"}>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-full text-white flex items-center justify-center gap-x-1 px-3 py-1.5 relative transition duration-200">
              <IoMdCart className="text-xl" />
              <p className="text-sm font-semibold">
                <FormattedPrice amount={totalAmt ? totalAmt : 0} />
              </p>
              <span className="bg-orange-600 text-white rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-md">
                {productData ? productData.length : 0}
              </span>
            </div>
          </Link>
          {session && (
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={50}
              height={50}
              className="rounded-full object-cover ml-2"
            />
          )}
          {orderData?.order?.length > 0 && session && (
            <Link href={"/order"} className="flex items-center text-gray-800">
              <BsBookmarks className="text-2xl" />
              <p className="text-sm font-semibold ml-1">Orders</p>
            </Link>
          )}
          {session && (
            <div
              onClick={() => signOut()}
              className="flex items-center cursor-pointer text-gray-800 ml-4"
            >
              <FiLogOut className="text-2xl" />
              <p className="text-sm font-semibold ml-1">Logout</p>
            </div>
          )}
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 p-4">
          {!session && (
            <div
              onClick={() => signIn()}
              className="flex items-center cursor-pointer text-gray-800"
            >
              <AiOutlineUser className="text-2xl" />
              <p className="text-sm font-semibold ml-1">Login/Register</p>
            </div>
          )}
          <Link href={"/cart"}>
            <div className="bg-gray-800 hover:bg-gray-700 rounded-full text-white flex items-center justify-center gap-x-1 px-3 py-1.5 relative transition duration-200">
              <IoMdCart className="text-xl" />
              <p className="text-sm font-semibold">
                <FormattedPrice amount={totalAmt ? totalAmt : 0} />
              </p>
              <span className="bg-orange-600 text-white rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-md">
                {productData ? productData.length : 0}
              </span>
            </div>
          </Link>
          {session && (
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={50}
              height={50}
              className="rounded-full object-cover ml-2"
            />
          )}
          {orderData?.order?.length > 0 && session && (
            <Link href={"/order"} className="flex items-center text-gray-800">
              <BsBookmarks className="text-2xl" />
              <p className="text-sm font-semibold ml-1">Orders</p>
            </Link>
          )}
          {session && (
            <div
              onClick={() => signOut()}
              className="flex items-center cursor-pointer text-gray-800"
            >
              <FiLogOut className="text-2xl" />
              <p className="text-sm font-semibold ml-1">Logout</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
