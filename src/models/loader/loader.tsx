import React from "react";
import { Spinner } from "react-bootstrap";
import "./loader.css";

const loader = (props: any) => {
    console.log(props);
  const { isShowLoader } = props;
  return (
    isShowLoader && (
    <div className="loader-container">
        <Spinner
          animation="border"
          className="loader"
        />
    </div>
    )
  );
};

export default loader;
