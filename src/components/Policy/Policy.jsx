import React from "react";
import "./policy.scss";
import { policyData } from "./policyData";

// import { HiOutlineShoppingBag } from "react-icons/hi";

import Grid from "@mui/material/Grid";
// import Item from "@mui/material/Item";

const Policy = () => {
  return (
    <div className="policy">
      <Grid container className="policy-card ">
        {policyData.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.id}
              className="policy__card"
            >
              <div className="policy__card__icon fs-43">
                {/* <HiOutlineShoppingBag className="fs-43" /> */}
                {item.icon}
              </div>
              <div className="policy__card__info">
                <div className="policy__card__title">{item.title}</div>
                <div className="policy__card__desc">{item.desc}</div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Policy;
