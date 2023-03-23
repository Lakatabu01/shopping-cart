import React from "react";

export const Footer = () => {
  const style = {
    backgroundColor: "#000",
    padding: "10px",
    position: "absolute",
    bottom: "0px",
    right: "0px",
    left: "0px",
    color: "white",
    display: "flex",
    justifyContent: "center",
  };

  return <div style={style}>Copyright © 2023 Olanrewaju</div>;
};
