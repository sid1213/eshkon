import React from "react";
import Style from "./index.module.scss";
import UserCard from "../UserCard/Index";
const Sider = () => {
  return (
    <div className={Style.sider}>
      <UserCard />
    </div>
  );
};

export default Sider;
