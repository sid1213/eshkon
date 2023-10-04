import React from "react";
import Style from "./index.module.scss";
import Sider from "./Sider";

const DashboardView = () => {
  return (
    <div className={Style.main}>
      <Sider />
    </div>
  );
};

export default DashboardView;
