"use client";

import Container from "@/components/Container";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import CartItem from "@/components/CartItem";
import { resetCart } from "@/redux/shoppingSlice";
import PaymentForm from "@/components/PaymentForm";
import Link from "next/link";

const CartPage = () => {
  const { productData } = useSelector((state: StateProps) => state?.shopping);
  const dispatch = useDispatch();

  return (
    <Container>
      {/* Image and Title Section */}
      <div className="relative mb-10">
        <img
          src="https://img.freepik.com/premium-photo/mockup-blank-craft-package-colorful-paper-shopping-bag-with-handles_35380-2749.jpg?w=900"
          alt="Shopping Cart"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold shadow-md">
          Cart
        </h2>
      </div>

      {productData.length > 0 ? (
        <Container>
          <div className="flex flex-col gap-5 mt-4">
            {/* Cart Items */}
            <div className="bg-white shadow-md rounded-lg p-5">
              <h3 className="text-xl font-semibold mb-4">Your Items</h3>
              <CartItem />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => dispatch(resetCart())}
                className="bg-red-500 text-base font-semibold text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200"
              >
                Reset Cart
              </button>
              <div className="flex-grow"></div>
              <div className="text-lg font-semibold">
                Total: {/* Add total price calculation here */}
              </div>
            </div>
            {/* Payment Form */}
            <div className="bg-white shadow-md rounded-lg p-5 mt-4">
              <h3 className="text-xl font-semibold mb-4">
                Payment Information
              </h3>
              <PaymentForm />
            </div>
          </div>
        </Container>
      ) : (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4 rounded-lg shadow-md">
          <p className="border-[1px] border-orange-600 w-full p-2 text-center">
            Your product cart is currently empty
          </p>
          <Link href={"/"}>
            <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-orange-600 duration-200">
              Return to Shop
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
