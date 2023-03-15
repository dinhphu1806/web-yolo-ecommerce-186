import React, { useState } from "react";
import "../../style/accessoryTab.scss";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductHats from "./ProductHats";
import ProductShoes from "./ProductShoes";
import ProductBags from "./ProductBags";
import ProductBelt from "./ProductBelt";

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

export default function AccessoryTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="accessory ">
      <Box className="accessory__container container">
        {/* product title */}
        <Box className="accessory__title" style={{ margin: "10px 0" }}>
          <h1 className="fs-20 fw-600">Phụ kiện</h1>
          <Box sx={{ borderColor: "divider" }} className="accessory__list">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Mũ" {...a11yProps(0)} />
              <Tab label="Giày" {...a11yProps(1)} />
              <Tab label="Túi đeo chéo" {...a11yProps(2)} />
              <Tab label="Dây lưng" {...a11yProps(3)} />
            </Tabs>
          </Box>
        </Box>
        {/*  product content */}
        <TabPanel value={value} index={0}>
          <ProductHats />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProductShoes />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProductBags />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProductBelt />
        </TabPanel>
      </Box>
    </Box>
  );
}
