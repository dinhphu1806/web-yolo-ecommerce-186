import React, { useState } from "react";
import "../../style/accessoryTab.scss";

// tabs
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ProductTrousers from "./ProductTrousers";
import ProductJeans from "./ProductJeans";
import ProductSorts from "./ProductSorts";
import ProductSweatPants from "./ProductSweatPants";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function TrouserTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="accessory ">
      <Box className="accessory__container container">
        {/* product title */}
        <Box className="accessory__title" style={{ margin: "10px 0" }}>
          <h1 className="fs-20 fw-600">Quần xuân hè</h1>
          <Box sx={{ borderColor: "divider" }} className="accessory__list">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Quần âu" {...a11yProps(0)} />
              <Tab label="Quần jeans" {...a11yProps(1)} />
              <Tab label="Quần sort" {...a11yProps(2)} />
              <Tab label="Quần nỉ dài" {...a11yProps(3)} />
            </Tabs>
          </Box>
        </Box>
        {/*  product content */}
        <TabPanel value={value} index={0}>
          <ProductTrousers />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProductJeans />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProductSorts />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProductSweatPants />
        </TabPanel>
      </Box>
    </Box>
  );
}
