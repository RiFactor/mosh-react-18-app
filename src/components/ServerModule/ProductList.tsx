import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  // QUESTION -- why does the array symbol need to be written twice: string[]([])

  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
