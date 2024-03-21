import React from "react";

const withButton = (Component, partialProps) => {
  return (props) => <Component {...props} {...partialProps} />;
};

export default withButton;
