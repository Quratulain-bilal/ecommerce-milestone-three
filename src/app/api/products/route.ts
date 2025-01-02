import { NextResponse } from "next/server";
import { productData } from "@/constants/data"; // Ensure this imports the updated productData

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Products fetched successfully",
      success: true,
      productData, // This should contain the updated product data
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product loading error",
      },
      { status: 500 }
    );
  }
};
