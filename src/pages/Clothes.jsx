import React, { useEffect, useState } from "react";
import "../sass/__variables.scss";
import "../style/clothes.scss";
import { BiCategory, BiSearch } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

// select option
// import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// grid
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProductList from "../components/UI/ProductList";
import Button from "@mui/material/Button";
import { logDOM } from "@testing-library/react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
const styleTitle = {
  fontWeight: "bold",
  cursor: "pointer",
};

// tabs

const style = {
  marginLeft: "15px",
  borderBottom: "1px",
};

const styleSearch = {
  position: "absolute",
  top: "50%",
  left: "20px",
  transform: "translate(-50%, -50%)",
};
const Clothes = ({ products }) => {
  //   console.log(products);

  const [data, setData] = useState([]);
  const [product, setProduct] = useState(data);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        "https://63de969a3d94d02c0bade940.mockapi.io/api/v1/products"
      );

      if (componentMounted) {
        setData(await res.clone().json());
        setProduct(await res.json());
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  // console.log(data);
  // selec option
  // const [sort, setSort] = useState("");

  // const handleChange = (event) => {
  //   setSort(event.target.value);
  // };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    localStorage.setItem("filterList", JSON.stringify(updatedList));
    const dataLocal = localStorage.getItem("filterList");
    const da = dataLocal !== null ? JSON.parse(dataLocal) : [];
    // console.log(da);
    setProduct(da);
  };

  // const getFilterProductFromStorage = () => {

  // };

  // useEffect(() => {
  //   getFilterProductFromStorage();
  // }, []);

  // console.log(product);
  // handle search
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const searchProduct = data.filter((item) => {
      return item.productName.toLowerCase().includes(searchValue.toLowerCase());
    });
    localStorage.setItem("searchProduct", JSON.stringify(searchProduct));
    // setData(dataSearch);
    const dt = JSON.parse(localStorage.getItem("searchProduct"));
    // console.log(dt);
    setProduct(dt);
  };

  // const getDataSearchProductFromStorage = () => {
  //   try {
  //     const localDataSearch = localStorage.getItem("searchProduct");
  //     const dt = JSON.parse(localDataSearch);
  //     // console.log(dt);
  //     setData(dt);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getDataSearchProductFromStorage();
  // }, []);

  // handle sort

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }

    return 0;
  };

  const handleSort = (value) => {
    if (value === "default") {
      const dt = JSON.parse(localStorage.getItem("productAll"));
      setProduct(dt);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let currentSort = [...product];
      localStorage.setItem("sortProduct", JSON.stringify(currentSort));
      // console.log(currentSort);

      currentSort.sort((a, b) =>
        toType
          ? compare(a.productName, b.productName, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      // const getSortProduct = JSON.parse(localStorage.getItem("sortProduct"));
      // // console.log(getSortProduct);
      setProduct([...currentSort]);
    }
  };
  return (
    <div className="">
      <div className="container">
        <div className="product__title flex">
          <Link
            to="/"
            className="text-black fw-700 fs-15"
            style={{ margin: "5px" }}
          >
            Trang chủ
          </Link>
          <span style={{ margin: "5px" }}>
            <IoIosArrowForward />
          </span>
          <span className="fs-15">Thời trang</span>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
              <div className="flex fw-700 fs-18">
                <BiCategory />
                <h1 style={{ marginLeft: "10px" }}> Danh mục sản phẩm</h1>
              </div>
              <Item>
                <Accordion>
                  {/* <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  > */}
                  <Typography
                    style={styleTitle}
                    onClick={() => setProduct(data)}
                  >
                    Tất cả
                  </Typography>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={styleTitle}>Áo nam</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={style}
                      onClick={() => filterProduct("coat")}
                    >
                      Áo khoắc
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography
                      style={style}
                      onClick={() => filterProduct("shirt")}
                    >
                      Áo sơ mi
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={styleTitle}>Quần xuân hè</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={style}
                      onClick={() => filterProduct("trousers")}
                    >
                      Quần âu
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography style={style}>Quần jean</Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography style={style}>Quần sort</Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography style={style}>Quần nỉ dài</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={styleTitle}>Phụ kiện</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={style}
                      onClick={() => filterProduct("hat")}
                    >
                      Mũ
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography
                      style={style}
                      onClick={() => filterProduct("shoe")}
                    >
                      Giày
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography
                      style={style}
                      onClick={() => filterProduct("bag")}
                    >
                      Túi đeo chéo
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography
                      style={style}
                      onClick={() => filterProduct("belt")}
                    >
                      Dây lưng
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <div
                className="flex flex-between fw-500 fs-20 px-2 py-2"
                style={{ flexWrap: "wrap" }}
              >
                <div className="flex" style={{ position: "relative" }}>
                  <BiSearch style={styleSearch} />
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm ..."
                    style={{ padding: "14px 35px" }}
                    onChange={handleSearch}
                  />
                </div>

                {/* <input type="text" /> */}
                {/* <Box sx={{ minWidth: 120 }} style={{ marginTop: "10px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sắp xếp
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sort}
                      label="Sắp xếp"
                      onChange={(e) => handleSort(e.target.value)}
                    >
                      <MenuItem value="ascending">Tăng dần từ A - Z</MenuItem>
                      <MenuItem value="descending">Giảm dần từ Z - A</MenuItem>
                      <MenuItem value="high">Tăng dần theo giá</MenuItem>
                      <MenuItem value="low">Giảm dần theo giá</MenuItem>
                    </Select>
                  </FormControl>
                </Box> */}

                <select
                  // value={sort}
                  name="sort"
                  id="sort"
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="none">Sắp xếp</option>
                  <option value="default">Mặc định </option>
                  <option value="ascending">Tăng dần từ A - Z</option>
                  <option value="descending">Giảm dần từ Z - A</option>
                  <option value="high">Tăng dần theo giá</option>
                  <option value="low">Giảm dần theo giá</option>
                </select>
              </div>
              <Item>
                {product.length === 0 ? (
                  <h1
                    style={{ textTransform: "unset" }}
                    className="w-full text-center fs-16 mt-2 fw-700"
                  >
                    Loading ...
                  </h1>
                ) :(
                  <ProductList data={product} />
                ) }

                
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Clothes;
