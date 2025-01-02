"use client";

import { BsLinkedin, BsFacebook } from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-10">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <h1 className="text-2xl font-bold">Annabrand</h1>
          <p className="text-sm">
            At Annabrand, we offer a wide range of high-quality products that
            cater to your every need. Our commitment to excellence ensures that
            you receive only the best, whether you're shopping for fashion,
            electronics, or home goods.
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="text-xl hover:text-orange-500 transition duration-200" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-xl hover:text-orange-500 transition duration-200" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Latest Articles</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-gray-300 hover:text-orange-500 cursor-pointer duration-200">
                10 Tips for Sustainable Fashion
              </span>
              <span className="text-orange-500">March 15, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-gray-300 hover:text-orange-500 cursor-pointer duration-200">
                The Rise of Smart Home Devices
              </span>
              <span className="text-orange-500">April 10, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-gray-300 hover:text-orange-500 cursor-pointer duration-200">
                How to Choose the Right Electronics
              </span>
              <span className="text-orange-500">April 25, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-gray-300 hover:text-orange-500 cursor-pointer duration-200">
                Home Decor Trends for 2023
              </span>
              <span className="text-orange-500">May 5, 2023</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold">Quick Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About Us
              </li>
            </Link>
            <Link href={"/newsletter"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Newsletter
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-lg font-semibold mb-2">Payment Methods</p>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
      </Container>
      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Annabrand. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
