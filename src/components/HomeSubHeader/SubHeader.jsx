import React from "react";
import "../HomeSubHeader/SubHeader.scss";
import sub1 from "../../assets/images/sub1.png";
import sub2 from "../../assets/images/sub2.png";

const SubHeader = () => {
  return (
    <>
      <div className="sub_header">
        <div className="container">
          <div className="sub_parent">
            <div className="sub_left">
              <img src={sub1} alt="Fresh Fruits" />
            </div>
            <div className="sub_right">
              <img src={sub2} alt="Vegetables" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
