import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import '../../styles/SidebarItem.css';

//Destructuring arrow, icon and label props from ./index.js
const SidebarItem = ({arrow, icon, label}) => {
  return (
    <div className="sidebarItem">
      <div className="sidebarItem__arrow">
        {/** If arrow is passed from ./index.js and true, then render <ArrowRightIcon /> Material Ui Icon*/}
        {arrow && <ArrowRightIcon />}
      </div>
      <div className="sidebarItem__main">
        {/** Displaying icon and label props */}
        {icon}
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
