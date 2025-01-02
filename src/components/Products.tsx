import { getProducts } from "@/helpers"; // Import the updated function
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products } from "../../type";

const ProductsList = async () => {
  const products = await getProducts(); // Fetch products from the API

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {Array.isArray(products) ? (
        products.map((item: Products) => (
          <ProductsData item={item} key={item._id} />
        ))
      ) : (
        <p>No products found.</p> // Handle the case where products is not an array
      )}
    </Container>
  );
};

export default ProductsList;
