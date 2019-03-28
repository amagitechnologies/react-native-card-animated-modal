import React from "react";
import PropTypes from "prop-types";
import CardContent from "../CardContent";

import styles from "./styles";

const DetailsContent = ({ customContainerStyle, children }) => (
  <CardContent customContainerStyle={[styles.container, customContainerStyle]}>
    {children}
  </CardContent>
);

DetailsContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  customContainerStyle: PropTypes.instanceOf(Object)
};

DetailsContent.defaultProps = {
  children: null,
  customContainerStyle: {}
};

export default DetailsContent;
