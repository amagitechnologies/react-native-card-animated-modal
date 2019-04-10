import React from "react";
import PropTypes from "prop-types";

import { Animated } from "react-native";

const CardContent = ({ customContainerStyle, children }) => (
  <Animated.View
    style={[
      { overflow: "hidden", borderRadius: 20, flex: 1 },
      customContainerStyle
    ]}
  >
    {children}
  </Animated.View>
);

CardContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  customContainerStyle: PropTypes.oneOfType([
    PropTypes.instanceOf(Object),
    PropTypes.arrayOf(PropTypes.instanceOf(Object))
  ])
};

CardContent.defaultProps = {
  children: null,
  customContainerStyle: {}
};

export default CardContent;
