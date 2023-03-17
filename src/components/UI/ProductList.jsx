import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

const ProductList = () => {
  // console.log(data);
  // const [coatProducts, setCoatProducts] = useState([]);

  // const getDataFromStorage = () => {
  //   try {
  //     const dataLocal = localStorage.getItem("product"); // console.log(dataLocal);
  //     const d = dataLocal !== null ? JSON.parse(dataLocal) : [];
  //     // console.log(d);
  //     setCoatProducts(d); // setCoat
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDataFromStorage();
  // }, []);
  const { products } = useSelector((state) => state.products);
  console.log(products, 'productlist');

  return (
    <Box>
      <Grid container spacing={2} rowSpacing={2} className="product">
        {products?.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </Grid>
    </Box>
  );
};
export default ProductList;
